function sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
  };

  p5.draw = () => {
    // SPHERE
    p5.background(0);
    p5.noFill();
    p5.stroke(38, 86, 37);
    p5.strokeWeight(0.5);
    p5.rotateY(p5.millis() / 10000);
    p5.rotateX(p5.millis() / 10000);
    p5.sphere(150);
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
}

export default sketch;
