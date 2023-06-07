import datetime
import random
import time

from selenium import webdriver
from selenium.webdriver import ActionChains, DesiredCapabilities
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec


class Scrapper:
    MAX_DELAY = 5
    MIN, MAX = 3, 5
    URL = "https://www.olx.pl/"
    MAX_TIME_BEFORE = 240

    def __init__(self, ip):
        if ip is None:
            options = Options()
            options.add_argument("window-size=1280,800")
            options.add_argument('--user-data-dir=c:/screen1')
            self.driver = webdriver.Chrome(options=options)
        else:
            chrome_options = Options()
            chrome_options.add_argument("--disable-dev-shm-usage")
            self.driver = webdriver.Remote(ip, DesiredCapabilities.CHROME, options=chrome_options)

    def __create_delay(self):
        time.sleep(random.randint(self.MIN, self.MAX))

    def __accept_rules(self):
        driver = self.driver
        try:
            button = WebDriverWait(driver, self.MAX_DELAY) \
                .until(ec.visibility_of_element_located((By.ID, 'onetrust-accept-btn-handler')))
            if button.is_displayed():
                button.click()
        except Exception as e:
            print("Problem with accept rules")

    def off(self):
        self.driver.close()

    def get_categories(self) -> []:
        driver = self.driver
        driver.get(self.URL)
        self.__create_delay()
        self.__accept_rules()
        self.__create_delay()
        elems = WebDriverWait(driver, self.MAX_DELAY).until(
            ec.visibility_of_all_elements_located((By.CSS_SELECTOR, "div.maincategories-list")))
        categories = []
        for elem in elems:
            elem: WebElement = elem
            cats = elem.find_elements(By.CSS_SELECTOR, "a")
            for cat in cats:
                categories.append(cat.text)
        self.__create_delay()
        return categories

    def get_products(self, config) -> []:
        driver = self.driver
        name = config["name"]
        category = config["category"]
        price_from = config["priceFrom"]
        price_to = config["priceTo"]

        print(f"STARTED EXECUTION: {name} - {category} - {price_from} - {price_to}")

        driver.get(self.URL)
        self.__create_delay()
        self.__accept_rules()
        self.__create_delay()

        button = WebDriverWait(driver, 5) \
            .until(ec.visibility_of_element_located((By.XPATH, f'.//a[.//span[text() = "{category}"]]')))
        self.__create_delay()
        button.click()
        print(f"CURRENT URL: {driver.current_url}")
        self.__create_delay()
        button_href = button.get_attribute('href')
        self.__create_delay()
        button2 = WebDriverWait(driver, 5) \
            .until(ec.visibility_of_element_located(
            (By.XPATH, f""".//a[@href='{button_href}'][./strong[text()='Zobacz wszystkie ogłoszenia']]""")))
        self.__create_delay()
        button2.click()
        print("CHOOSE: 'Zobacz wszystkie ogłoszenia'")
        self.__create_delay()
        name_input = WebDriverWait(driver, 5) \
            .until(ec.visibility_of_element_located((By.ID, "search")))
        self.__create_delay()
        name_input.send_keys(f"{name}")
        print(f"SEND NAME: {name}")
        self.__create_delay()
        try:
            input_from: WebElement = WebDriverWait(driver, 5) \
                .until(ec.visibility_of_element_located((By.NAME, "range-from-input")))
            self.__create_delay()
            input_from.click()
            input_from.clear()
            input_from.send_keys(f"{price_from}")
            self.__create_delay()
            input_from.click()
            print(f"SEND PRICE FROM: {price_from}")
        except Exception as e:
            print("ERROR SET PRICE FROM")
            print(e)

        try:
            input_to = WebDriverWait(driver, 5) \
                .until(ec.visibility_of_element_located((By.NAME, "range-to-input")))
            input_to.click()
            self.__create_delay()
            input_to.clear()
            input_to.send_keys(f"{price_to}")
            self.__create_delay()
            input_to.click()
            print(f"SEND PRICE TO: {price_to}")
        except Exception as e:
            print("ERROR SET PRICE TO")
            print(e)

        try:
            cos = WebDriverWait(driver, 5) \
                .until(ec.visibility_of_element_located((By.XPATH, ".//div[span[text()='Sortuj:']]")))
            self.__create_delay()
            find_button: WebElement = cos.find_element(By.TAG_NAME, "div")
            self.__create_delay()
            WebDriverWait(driver, 5) \
                .until(ec.visibility_of(find_button)).click()
            self.__create_delay()
            WebDriverWait(driver, 5) \
                .until(ec.visibility_of_element_located((By.XPATH, './/div[contains(text(),"Najnowsze")]'))).click()
            self.__create_delay()
            print(f"Click Sort")
        except Exception as e:
            print("ERROR SET SORT TYPE")
            print(e)
        elems = WebDriverWait(driver, 5) \
            .until(ec.visibility_of_all_elements_located((By.XPATH, "//div[@data-cy='l-card']")))
        items = []
        now = datetime.datetime.now()

        actions = ActionChains(driver)
        for elem in elems:
            information: str = elem.find_element(By.CSS_SELECTOR, "p[data-testid='location-date']").text
            actions.move_to_element(elem).perform()
            try:
                print(information)
                if "Odświeżono" in information:
                    print("ELEMENT WAS REFRESHED")
                    continue
                elif "Dzisiaj" not in information:
                    print("ELEMENT WAS NOT TODAY")
                    continue
                place = information.split("-")[0]
                date: datetime.datetime = self.convert_string_to_date(information)
                if date + datetime.timedelta(minutes=self.MAX_TIME_BEFORE) < now:
                    print(f"ELEMENT TOO OLD {date.hour} - {date.minute} / {now.hour} - {now.minute}")
                    continue
            except Exception as e:
                print(e)
                continue
            price_str: str = elem.find_element(By.XPATH, './/p[@data-testid="ad-price"]').text
            price_str = "".join(filter(str.isdigit, price_str.split(".")[0].split(",")[0]))
            price: int = 0
            print(f"TRY TO CHANGE PRICE : {price_str}")
            try:
                price = int(price_str)
            except Exception as e:
                print(f"COULD NOT CONVERT PRICE {price_str} TO INT")
                print(e)
            title = elem.find_element(By.XPATH, './/h6').text
            img = elem.find_element(By.XPATH, ".//img").get_attribute('src')
            link = elem.find_element(By.XPATH, './/a').get_attribute('href')
            img = img if img[0] != "/" else None
            items.append(
                {"name": title, "category": category, "price": price, "image": img,
                 "url": link, "date": date.isoformat(), "place": place})
        self.__create_delay()
        print(f"FOUND items: {len(items)} FROM {driver.current_url}")
        return [item for item in items if price_from <= item["price"] <= price_to]

    @staticmethod
    def convert_string_to_date(date: str) -> datetime.datetime:
        try:
            time_string = date.split(" o ")[1].split(":")
            now = datetime.datetime.now()

            new_datetime = datetime.datetime(year=now.year, month=now.month, day=now.day, hour=int(time_string[0]),
                                             minute=int(time_string[1]))
            return new_datetime
        except Exception as e:
            print(e)
            return datetime.datetime(year=1, month=1, day=1)
