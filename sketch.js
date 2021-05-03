
var dataBase;//this variable allows this instance to talk to data base.
var gameState = 0;
var form;
var playerCount = 0;
var game;
var player;

function setup(){
    createCanvas(500,500);

    dataBase = firebase.database(); // handler that helps you talk to database
    game = new Game();
    game.getState();
    game.start();

   
}

function draw(){
    background("white");

}

