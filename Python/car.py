class Car:
    id = int
    license = str
    driver = str
    passenger = int

    def __init__(self, license, driver):
        self.license = license
        self.driver = driver
    
    def printData(self):
         print("Licence: "+self.license)