webcam = webcam.attach();

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();
}

function draw() {
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(275, 25, 40);
    circle(25, 25, 40);
    circle(275, 275, 40);
    circle(25, 275, 40);
    fill("green");
    stroke("green");
    rect(11, 47, 30, 207);
    rect(260, 47, 30, 207);
    rect(45, 9, 212, 35);
    rect(45, 255, 212, 35);
    image(camera, 75, 75, 150, 150);
}
