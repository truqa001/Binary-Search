
let array;
let complete = false;
let search_value;
let left_index;
let right_index;
let mid_index;
let start_search;
const CIRCLE_WIDTH = 50;
const CIRCLE_HEIGHT = 50;
const BOARD_HEIGHT = 50;



function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(1);

    array = new Array();
    start_search = false;
    

    for (var i=0;i<=100;i++){
        let x = random(CIRCLE_WIDTH/2, width-CIRCLE_WIDTH/2);
        let y = random(CIRCLE_HEIGHT/2+BOARD_HEIGHT, window.innerHeight-CIRCLE_HEIGHT/2);

        let circle= new Circle(i, x, y, CIRCLE_WIDTH, CIRCLE_HEIGHT);
        array.push(circle);
    }

    left_index = 0;
    right_index = array.length-1;
    mid_index = (left_index+right_index)/2 ;


    noLoop();
}


function draw(){

    render_Circles();

    //binary search
    if (start_search){

        if (search_value == array[mid_index].getValue()){
            for (var i=0; i<array.length;i++){
                if (i != mid_index){
                    array[i] = null;
                }
            }
            render_Circles()

            showElement("reset");
            hideElement("loading");
            showElement("completed");

            noLoop();
        }
        //if value on left side, delete the right side, and vice versa
        if (search_value < array[mid_index].getValue()){
            for (var i=mid_index; i<=right_index;i++){
                array[i] = null;
            }
            right_index = mid_index-1;

        }else{
            for (var i=0; i<= mid_index;i++){
                array[i] = null;
            }
            left_index = mid_index+1;
        }
        mid_index = parseInt((left_index+right_index)/2) ;
    }






}

//update number of exist circles
function render_Circles(){
    background('#13001c');
    for (var i=0;i<array.length;i++){
        if (array[i] != null){
            array[i].drawCircle();
        }

    }
}

//search button pressed
function search() {
    disable_input(true);
    search_value = document.getElementById("input").value;

    if (search_value > 100 || search_value < 0){
        showElement("error");
        hideElement("search");
        showElement("reset");
    }else{
        searching()
    }
}

//start searching
function searching(){
    start_search = true;
    hideElement("search");
    showElement("loading")
    loop();
}

//reset screen
function reset(){
    set_input_value(0);
    showElement("search");
    hideElement("reset");
    hideElement("completed");
    hideElement("error");
    disable_input(false);
    setup();
    draw();
}

function showElement(id){
    document.getElementById(id).style.display = "inline-block";

}
function hideElement(id) {
    document.getElementById(id).style.display = "none";
}
function disable_input(bool) {
    document.getElementById("input").disabled = bool;
}
function set_input_value(val) {
    document.getElementById("input").value = val;
}