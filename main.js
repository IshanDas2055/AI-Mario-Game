function preload() {
	world_start = loadSound("world_start.wav");
	jump = loadSound("jump.wav");
	coin_collect = loadSound("coin.wav");
	gameover = loadSound("gameover.wav");
    mario_die = loadSound("mariodie.wav");
	Goomba_death = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() 
{

	canvas = createCanvas(1240,336);
	canvas.parent("canvas");

	instializeInSetup(mario);

	video= createCapture(VIDEO);
    video.size(800,400);
	video.parent("game_console");

	PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotResults);

}

function draw() {
	game()
}

function modelLoaded()
{
    console.log("Model Has Been Initiated")
}

function gotResults(results)
{
    console.log(results);
    noseX= results[0].pose.nose.x;    
    noseY=results[0].pose.nose.y; 
}




