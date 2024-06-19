// let angle = 0;
// let xOff = 0;
// let zOff = 1;
// let yOff = 2;
// let height = 5;

function sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    // p5.angleMode(p5.DEGREES);
  };

  p5.draw = () => {
    // SPHERE
    p5.background(0);
    p5.noFill();
    p5.stroke(38, 86, 37);
    p5.strokeWeight(0.5);
    // p5.translate(
    //   p5.noise(xOff) * 100,
    //   p5.noise(yOff) * height * 0.01,
    //   p5.noise(zOff) * 600
    // );
    p5.rotateY(p5.millis() / 10000);
    p5.rotateX(p5.millis() / 10000);
    p5.sphere(150);

    // xOff += 0.001;
    // yOff += 0.001;
    // zOff += 0.001;
  };
}

export default sketch;
