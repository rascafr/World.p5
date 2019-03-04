let items = [];

function setup() {
    let c = createCanvas(640, 480);
}

function draw() {
    background(5, 5, 8);

    if (mouseIsPressed) {
        createOneAt(mouseX, mouseY);
    }

    items.forEach(i => {
        i.doGravity();
        i.show();
    });
}

function createOneAt(x, y) {
    let p = new Particule();
    p.init(x, y);
    items.push(p);
}