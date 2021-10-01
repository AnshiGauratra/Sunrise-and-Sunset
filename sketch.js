const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;


var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,650);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);
        color("black")
        fill("black");
        textSize(30);
        text ("Time:  " + hour , 50,100)
}

    async function getBackgroundImg(){

        var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")
        var responseJSON = await response.json();
        var datetime = responseJSON.datetime;
        hour = datetime.slice(11,16);

        if(hour>=0 && hour<18 ){
            bg = "sunset.png"; 

        }

        else{
            bg="sunrise.png"            
        }

        backgroundImg = loadImage(bg);
        

    }
