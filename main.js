function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
}

function draw() {
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(60, 150, 80);
    rect(120, 115, 70, 70);
    ellipse(240, 145, 70, 70);
}