import random
import time

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec


class Scrapper:
    MAX_DELAY = 5
    MIN, MAX = 5, 10
    URL = "https://www.olx.pl/"

    def __init__(self):
        options = Options()
        options.add_argument("window-size=1280,800")
        options.add_argument('--user-data-dir=c:/screen1')
        self.driver = webdriver.Chrome(options=options)

    def __create_delay(self):
        time.sleep(random.randint(self.MIN, self.MAX))

    def __accept_rules(self):
        driver = self.driver
        try:
            button = WebDriverWait(driver, self.MAX_DELAY) \
                .until(ec.visibility_of_element_located((By.ID, 'onetrust-accept-btn-handler')))
            print(0)
            if button.is_displayed():
                button.click()
        except Exception as e:
            print(e)

    def off(self):
        self.driver.close()

    def get_categories(self) -> []:
        driver = self.driver
        driver.get(self.URL)
        self.__create_delay()
        print(1)
        self.__accept_rules()
        print(2)
        self.__create_delay()
        elems = WebDriverWait(driver, self.MAX_DELAY).until(
            ec.visibility_of_all_elements_located((By.CSS_SELECTOR, "div.maincategories-list")))
        categories = []
        print(3)
        for elem in elems:
            elem: WebElement = elem
            cats = elem.find_elements(By.CSS_SELECTOR, "a")
            for cat in cats:
                categories.append(cat.text)
        self.__create_delay()
        print(4)
        return categories

    def get_products(self, config) -> []:
        driver = self.driver
        name = config["name"]
        category = config["category"]
        price_from = config["priceFrom"]
        price_to = config["priceTo"]
        print(name, category, price_from, price_to)
        return [
            {
                "name": "Volkswagen",
                "category": "CATEGORY1",
                "price": 1200,
                "image": "https://www.volkswagen.pl/idhub/content/dam/onehub_master/pc/models/cutouts-mofa-1-5/up_R-Line_34FrontPC.png",
                "url": "https://www.olx.pl/"
            },
            {
                "name": "Volkswagen",
                "category": "CATEGORY2",
                "price": 1200,
                "image": "https://www.volkswagen.pl/idhub/content/dam/onehub_master/pc/models/cutouts-mofa-1-5/up_R-Line_34FrontPC.png",
                "url": "https://stackoverflow.com/questions/54285086/cannot-construct-instance-of-com-test-filtermodel-no-string-argument-construc"
            },
            {
                "name": "Volkswagen",
                "category": "CATEGORY3",
                "price": 1200,
                "image": "https://www.volkswagen.pl/idhub/content/dam/onehub_master/pc/models/cutouts-mofa-1-5/up_R-Line_34FrontPC.png",
                "url": "https://www.google.com/search?q=java.lang.IllegalArgumentException%3A+Cannot+construct+instance+of&oq=java.lang.IllegalArgumentException%3A+Cannot+construct+instance+of&aqs=chrome..69i57j69i59.680j0j9&sourceid=chrome&ie=UTF-8"
            },
        ]
