class Greeter
{
	public message: string;
	constructor(message:string)
	{
		this.message=message;
	}
	greet():void
	{
		console.log("Message:" + this.message);
	}
}
let g = new Greeter("Hello Welcome");
g.greet();