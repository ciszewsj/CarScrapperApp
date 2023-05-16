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
                "Name": "Volkswagen",
                "Category": "CATEGORY1",
                "Price": 1200,
                "Image": "https://www.volkswagen.pl/idhub/content/dam/onehub_master/pc/models/cutouts-mofa-1-5/up_R-Line_34FrontPC.png"
            },
            {
                "Name": "Volkswagen",
                "Category": "CATEGORY2",
                "Price": 1200,
                "Image": "https://www.volkswagen.pl/idhub/content/dam/onehub_master/pc/models/cutouts-mofa-1-5/up_R-Line_34FrontPC.png"
            },
            {
                "Name": "Volkswagen",
                "Category": "CATEGORY3",
                "Price": 1200,
                "Image": "https://www.volkswagen.pl/idhub/content/dam/onehub_master/pc/models/cutouts-mofa-1-5/up_R-Line_34FrontPC.png"
            },
        ]
