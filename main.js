function preload() {

}

function setup() {
    canvas = createCanvas(500,350);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    
    tint_color = "";
}

function draw() {
    image(video,0,0,500,350);
    tint(tint_color);
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}

function take_snapshot() {
    save('advita.png');
}