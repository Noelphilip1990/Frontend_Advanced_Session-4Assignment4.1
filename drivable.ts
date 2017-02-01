interface Drivable
{
	 start(): void;
	 drive(): void;
	 getPosition(): void;
}
class Car implements Drivable
{
	start()
	{
		console.log("Car has started");
	}
	drive()
	{
		console.log("Car is in drive mode");
	}
	getPosition()
	{
		console.log("GPS coordinates are: 123.111.111,1125,111,555.6");
	}
}

interface Flyable
{
	takeoff():void;
	fly():void;
	landing():void;
}
class Helicopter implements Flyable
{
	takeoff() {
		console.log("Helicopter has started taking off");
	}
	fly() {
		console.log("Helicopter is now in flying mode");
	}
	landing() {
		console.log("Helicopter is landing ");
	}
}
class FlyingCar implements Drivable,Flyable
{
	start(){
		console.log("Flying Car has started");
	}
	drive(){
		console.log("FlyingCar is in drive mode");
	}
	getPosition(){
		console.log("GPS coordinates are: 123.111.111,1125,111,555.6");
	}
	takeoff(){
		console.log("Flying Car has started taking off");
	}
	fly(){
		console.log("Flying is now in flying mode");
	}
	landing(){
		console.log("Flying Car is landing ");
	}
}
let car = new Car();
car.drive();
car.start();
car.getPosition();
let heli = new Helicopter();
heli.takeoff();
heli.fly();
heli.landing();
let fly = new FlyingCar();
fly.start();
fly.drive();
fly.getPosition();
fly.takeoff();
fly.fly();
fly.landing();
