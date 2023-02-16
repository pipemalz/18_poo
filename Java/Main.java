class Main {
    public static void main(String[] args) {
        UberX uberX = new UberX("AMQ123", new Account("Camila Gonzalez", "AND123"),"Chevrolet","Spark");
        uberX.setPassenger(4);
        uberX.printDataCar();
        // Car car2 = new Car("BBF092", new Account("Tomas Molina", "YUF010"));
        // car2.passenger = 5;
        // car2.printDataCar();
    }
}