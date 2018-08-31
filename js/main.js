
let array= [];

function setup() {
    createCanvas(window.innerWidth,innerHeight);
    background(0);



    for (var i=0;i<100;i++){
        let x = random(0, window.innerWidth);
        let y = random(0, window.innerHeight);
        let a= new Circle(i, x, y);
        a.drawCircle();
    }


}