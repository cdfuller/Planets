var pg;
var xOff;
var yOff;
var colorOffset;

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
    background(20);
    renderNoise();
    pg.filter(BLUR, 2);
    texture(pg)
    rotateY(radians(90));
    sphere(250, 60, 60);
    noLoop();
}

function renderNoise(){
    pg.loadPixels();
    for (var x = 0; x < pg.width * 2; x++ ){
        for (var y = 0; y < pg.height * 2; y++){
            var px_h = (noise(x * 0.1, y * 0.05) * 255) + colorOffset;
            var px_s = (noise(x, y) * 40) + 20;
            var px_b = (noise(x * 0.02, y * 0.03) * 65) + 5;
            var c = color(px_h, px_s, px_b);
            pg.set(x, y, c);
        }
        console.log("rows");
    }
    pg.updatePixels();
}