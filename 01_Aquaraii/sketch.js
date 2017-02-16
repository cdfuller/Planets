var pg;
var xOff;
var yOff;
var colorOffset;

var rendered = false;
var saveImg = false;

function setup() {
    createCanvas(640, 640, WEBGL);
    colorMode(HSB);
    
    pg = createGraphics(350, 350);
    pg.colorMode(HSB);

    xOff = random(255);
    yOff = random(255);
    colorOffset = random(255);
}

function draw() {
    if (rendered == false){
        generatePlanet();
        rendered = true;
    }
    if (saveImg == true){
        saveCanvas();
        saveImg = false;
    }
}

function generatePlanet(){
    background(20);
    renderNoise();
    pg.filter(BLUR, 2);
    texture(pg)
    rotateY(radians(90));
    sphere(250, 60, 60);
}

function renderNoise(){
    pg.loadPixels();
    for (var x = 0; x < pg.width * 2; x++ ){
        for (var y = 0; y < pg.height * 2; y++){
            var px_h = (noise(x * 0.05, y * 0.2) * 255) + colorOffset;
            var px_s = (noise(x, y) * 40) + random(40) + 20;
            var px_b = (noise(x * 0.02, y * 0.1) * 60) + 10;
            var c = color(px_h, px_s, px_b);
            pg.set(x, y, c);
        }
        console.log("rows");
    }
    pg.updatePixels();
}