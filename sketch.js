var bouncables = [];
function setup() {
  createCanvas(400, 400);
  for(var y = 0; y < 10000; y++){
    bouncables.push(new Bouncable(color(random(0,255),random(0,255),random(0,255)),random(50,350),random(50,350),random(5,50),random(1,5),random(0,360)))
  }
}
function draw() {
  background(220)
    for(var y = 0; y < bouncables.length; y++){
    bouncables[y].draw();
    
  }
}
