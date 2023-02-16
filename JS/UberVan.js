import Car from './Car.js';

class UberVan extends Car{
    constructor(id, license, driver, passengers, typeCarAccepted, seatsMaterial){
        super(id, license, driver, passengers);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;
    }
    showDataCar(){
        console.log(`
            ID: ${toyota.id}
            License: ${toyota.license}
            Driver Name: ${toyota.driver.name}
            Driver Document: ${toyota.driver.document}
            Passengers: ${toyota.passengers}
            Accepted brands: ${toyota.typeCarAccepted}
            Seats Material: ${toyota.seatsMaterial}
        `);
    }
}


const toyota = new UberVan('23123', 'fksdk23', {name: "Felipe Moreno", document: 1036401096}, 6, ['toyota', 'ford'], 'leather');

toyota.showDataCar();
