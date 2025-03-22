import { func } from "prop-types";

var ledBrightnessArray = [];
var LED_NUM = 12;




function setup() {
    createCanvas(800, 800);
    for (var i = 0; i < LED_NUM; i++) {
        ledBrightnessArray.push(0);
    }
}
  
function draw() {
    background(220);
    translate(400, 400)
    ellipse(50, 50, 80, 80);
    
}

function lightUpLED(ledNum) {
    ledBrightnessArray[ledNum] = 255;
}