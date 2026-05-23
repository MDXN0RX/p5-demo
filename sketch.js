var setupScript = function() {};
var drawScript = function() {};
var keyPressedScript = function() {};

var canvasX = 600;
var canvasY = 600;

function setup() {
  var canvas = createCanvas(canvasX, canvasY);
  canvas.parent('p5-canvas');
}

function draw() {
  background(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255));


  drawScript();
}

function keyPressed() {
  keyPressedScript();
}