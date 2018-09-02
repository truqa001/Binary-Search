class Circle{
    constructor(value, CIRCLE_X, CIRCLE_Y, SCREEN_WIDTH){
    this.value = value;

    this.CIRCLE_X = CIRCLE_X;
    this.CIRCLE_Y = CIRCLE_Y;

    if (SCREEN_WIDTH<=600){
        this.CIRCLE_WIDTH = 50;
        this.CIRCLE_HEIGHT = 50;
    }else{
        this.CIRCLE_WIDTH = 70;
        this.CIRCLE_HEIGHT = 70;
    }

    }

    drawCircle(){
        fill(200,150,150);
        ellipse(this.CIRCLE_X, this.CIRCLE_Y,this.CIRCLE_WIDTH, this.CIRCLE_HEIGHT)

        textSize(20);
        fill(255);
        text(this.value,this.CIRCLE_X- textWidth(this.value)/6, this.CIRCLE_Y+5);
        textAlign(CENTER);
    }

    getValue(){
        return this.value;
    }
}