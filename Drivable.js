var Car = (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log("Car has started");
    };
    Car.prototype.drive = function () {
        console.log("Car is in drive mode");
    };
    Car.prototype.getPosition = function () {
        console.log("GPS coordinates are: 123.111.111,1125,111,555.6");
    };
    return Car;
}());
var FlyingCar = (function () {
    function FlyingCar() {
    }
    FlyingCar.prototype.start = function () {
        console.log("Flying Car has started");
    };
    FlyingCar.prototype.drive = function () {
        console.log("FlyingCar is in drive mode");
    };
    FlyingCar.prototype.getPosition = function () {
        console.log("GPS coordinates are: 123.111.111,1125,111,555.6");
    };
    FlyingCar.prototype.takeoff = function () {
        console.log("Flying Car has started taking off");
    };
    FlyingCar.prototype.fly = function () {
        console.log("Flying is now in flying mode");
    };
    FlyingCar.prototype.landing = function () {
        console.log("Flying Car is landing ");
    };
    return FlyingCar;
}());
var car = new Car();
car.drive();
car.start();
car.getPosition();
var fly = new FlyingCar();
fly.start();
fly.drive();
fly.getPosition();
fly.takeoff();
fly.fly();
fly.landing();
