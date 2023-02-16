export default class Car {
    constructor(id, license, driver, passengers) {
        this.id = id;
        this.license = license;
        this.driver = driver;
        this.passengers = passengers;

    }
    printDataCar() {
        console.log(this.id);
        console.log(this.driver.name);
        console.log(this.driver.document);
    }
}