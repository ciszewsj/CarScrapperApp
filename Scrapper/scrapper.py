from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait


class Scrapper:
    MAX_DELAY = 5
    MIN, MAX = 5, 10
    URL = "https://www.olx.pl/"

    def __init__(self):
        options = Options()
        options.add_argument("window-size=1280,800")
        options.add_argument('--user-data-dir=c:/screen1')
        self.driver = webdriver.Chrome(options=options)

    def off(self):
        self.driver.close()

    def get_categories(self) -> []:
        driver = self.driver
        return [
            "CATEGORY1",
            "CATEGORY2",
            "CATEGORY3",
        ]

    def get_products(self) -> []:
        driver = self.driver
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
