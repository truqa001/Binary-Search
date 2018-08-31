
function Circle(value, CIRCLE_X, CIRCLE_Y){
    this.value = value;

    this.CIRCLE_X = CIRCLE_X;
    this.CIRCLE_Y = CIRCLE_Y;

    this.CIRCLE_WIDTH = 70;
    this.CIRCLE_HEIGHT = 70;


    this.drawCircle = function(){
        fill(255,25,25);
        ellipse(this.CIRCLE_X, this.CIRCLE_Y,this.CIRCLE_WIDTH, this.CIRCLE_HEIGHT)

        textSize(20);
        fill(255);
        text(this.value,this.CIRCLE_X- textWidth(this.value)/2, this.CIRCLE_Y+5);
        textAlign(CENTER);
    }
}