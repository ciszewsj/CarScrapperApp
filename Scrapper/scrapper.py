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
    MIN, MAX = 3, 5
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
        self.__create_delay()
        self.__accept_rules()
        self.__create_delay()

        button = WebDriverWait(driver, 5) \
            .until(ec.visibility_of_element_located((By.XPATH, f'.//a[.//span[text() = "{category}"]]')))
        self.__create_delay()
        button.click()
        self.__create_delay()
        button_href = button.get_attribute('href')
        self.__create_delay()
        button2 = WebDriverWait(driver, 5) \
            .until(ec.visibility_of_element_located(
            (By.XPATH, f""".//a[@href='{button_href}'][./strong[text()='Zobacz wszystkie ogłoszenia']]""")))
        self.__create_delay()
        button2.click()
        self.__create_delay()
        name_input = WebDriverWait(driver, 5) \
            .until(ec.visibility_of_element_located((By.ID, "search")))
        self.__create_delay()
        name_input.send_keys(f"{name}")
        self.__create_delay()
        try:
            input_from = WebDriverWait(driver, 5) \
                .until(ec.visibility_of_element_located((By.NAME, "range-from-input")))
            self.__create_delay()
            input_from.send_keys(f"{price_from}")
            self.__create_delay()
        except Exception as e:
            print(e)
        try:
            input_to = WebDriverWait(driver, 5) \
                .until(ec.visibility_of_element_located((By.NAME, "range-to-input")))
            self.__create_delay()
            input_to.send_keys(f"{price_to}")
            self.__create_delay()
        except Exception as e:
            print(e)
        try:
            cos = WebDriverWait(driver, 5) \
                .until(ec.visibility_of_element_located((By.XPATH, ".//div[span[text()='Sortuj:']]")))
            self.__create_delay()
            find_button = cos.find_element(By.TAG_NAME, "div")
            self.__create_delay()
            find_button.click()
            self.__create_delay()
        except Exception as e:
            print(e)
        elems = WebDriverWait(driver, 5) \
            .until(ec.visibility_of_all_elements_located((By.XPATH, "//div[@data-cy='l-card']")))
        items = []
        for elem in elems:
            price = "".join(filter(str.isdigit, elem.find_element(By.XPATH, './/p[@data-testid="ad-price"]').text))
            title = elem.find_element(By.XPATH, './/h6').text
            img = elem.find_element(By.XPATH, ".//img").get_attribute('src')
            link = elem.find_element(By.XPATH, './/a').get_attribute('href')
            items.append(
                {"name": title, "category": category, "price": price if type(price) == type(int) else 0, "image": img,
                 "url": link})
        self.__create_delay()
        return items
