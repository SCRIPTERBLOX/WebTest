void setup() {
    size(600, 600);
    backgroundShade = random(255);
}

void draw() {
    background(0);

    rect(mouseX-25, mouseY-25, 50, 50)
    ellipse(mouseX, mouseY, 20, 20);

    document.getElementById("label").innerHTML = "Mouse coordinates: " + mouseX + ", " + mouseY;
}