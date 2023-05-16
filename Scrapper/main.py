import pika
import json

from scrapper import Scrapper

GET_CATEGORY = "GET_CATEGORY"
GET_CARS_FOR_USER = "GET_CARS_FOR_USER"

REQUEST_QUEUE = "request_queue"
RESPONSE_QUEUE = "response_queue"


def response_body(resp_type, elem_list, user_id=None):
    return json.dumps({"type": resp_type, "user_id": user_id, "body": elem_list})


def send_to_queue(message, queue: str = RESPONSE_QUEUE):
    channel.queue_declare(queue=queue)
    channel.basic_publish(exchange='', routing_key=queue, body=message)


def callback(ch, method, properties, body):
    try:
        message = json.loads(body)
        print("RECEIVED: ", message)
        if message["type"] == GET_CATEGORY:
            send_to_queue(response_body(message["type"], scrapper.get_categories()))
            return
        elif message["type"] == GET_CARS_FOR_USER:
            send_to_queue(response_body(message["type"], scrapper.get_products(), message["user_id"]))
            return
        else:
            print("UNEXPECTED EVENT\n" + body)
    except Exception as ex:
        print(ex)


scrapper = None
channel = None
if __name__ == "__main__":
    print("SERVER INITED")
    try:
        scrapper = Scrapper()
        credentials = pika.PlainCredentials('guest', 'guest')
        parameters = pika.ConnectionParameters('localhost', 5672, '/', credentials)
        connection = pika.BlockingConnection(parameters)
        channel = connection.channel()

        channel.queue_declare(queue=REQUEST_QUEUE)
        channel.basic_consume(queue=REQUEST_QUEUE, on_message_callback=callback, auto_ack=True)

        print("SERVER STARTED")
        channel.start_consuming()
        connection.close()
    except Exception as e:
        print(e)
    finally:
        if scrapper is not None:
            scrapper.off()
        if channel is not None:
            channel.stop_consuming()
            channel.close()
