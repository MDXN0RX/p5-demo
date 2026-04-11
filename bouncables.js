class Bouncable {
    constructor(color,x,y,size,speed,direction){
        this.color = color;
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.direction = direction;
    }
    draw() {
        fill(this.color)
        circle(this.x , this.y , this.size, this.speed, this.direction)

        this.x = this.x + sin(PI / 180 * this.direction) * this.speed
        this.y = this.y + cos(PI / 180 * this.direction) * this.speed
        if(this.x + this.size / 2 >= 400|| this.x - this.size / 2 <= 0){
            this.direction = this.direction * -1;
        }
        if(this.y + this.size / 2 >= 400 || this.y - this.size / 2 <= 0){
            this.direction = (this.direction - 180) * -1;
        }
    }
}
function setupBouncables(){
     for(var y = 0; y < 1000; y++){
        bouncables.push(new Bouncable(color(random(0,255),random(0,255),random(0,255)),random(50,350),random(50,350),random(5,50),random(5,50),random(0,360)))
  }
}
function drawBouncables(){
    for(var y = 0; y < bouncables.length; y++){
    bouncables[y].draw();
    }
}