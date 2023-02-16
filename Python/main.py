from car import Car
from account import Account

if __name__ == "__main__":
    print('Hola mundo')
    car = Car("GHT728", Account("Felipe Moreno", "1036401096"));
    car.passenger = 10;
    print(car.license)
    print(vars(car.driver))
    
    car2 = Car("HUJA817", Account("Melancolico Hernandez", "104784733"))
    print(car2.license)
    print(vars(car2.driver))
    car2.printData()