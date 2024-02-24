import Rectangle from 'src/entities/rectangle';
import { Circle } from 'src/entities/circle';
import { TriangleEquilateral } from 'src/entities/triangle-equilateral';
import { Hexagon } from 'src/entities/hexagon';
import { getFromInterval } from 'src/utils/index';

const minSide = 30;
const maxSide = 50;
const minR = minSide / 2;
const maxR = maxSide / 2;

const genRandomVelocity = () => ({
  x: getFromInterval(-2, 2),
  y: getFromInterval(-2, 2),
});

const makeRectangle = (field: () => { width: number; height: number }) => {
  const { width: fieldWidth, height: fieldHeight } = field();
  const rw = getFromInterval(minSide, maxSide);
  const rh = getFromInterval(minSide, maxSide);
  const x = getFromInterval(0, fieldWidth - rw);
  const y = getFromInterval(0, fieldHeight - rh);
  return new Rectangle(x, y, rw, rh, genRandomVelocity());
};

const makeCircle = (field: () => { width: number; height: number }) => {
  const { width: fieldWidth, height: fieldHeight } = field();
  const radius = getFromInterval(minR, maxR);
  const x = getFromInterval(radius, fieldWidth - radius);
  const y = getFromInterval(radius, fieldHeight - radius);
  return new Circle(x, y, radius, genRandomVelocity());
};

const makeTriangle = (field: () => { width: number; height: number }) => {
  const { width: fieldWidth, height: fieldHeight } = field();
  const side = getFromInterval(minSide, maxSide);
  const x = getFromInterval(0, fieldWidth);
  const y = getFromInterval(0, fieldHeight);
  const shape = new TriangleEquilateral(x, y, side, genRandomVelocity());
  const halfSide = side / 2;
  shape.x = getFromInterval(halfSide, fieldWidth - halfSide);
  shape.y = getFromInterval(
    (shape.height * 2) / 3,
    fieldHeight - shape.height / 3,
  );
  return shape;
};

const makeHexagon = (field: () => { width: number; height: number }) => {
  const { width: fieldWidth, height: fieldHeight } = field();
  const side = getFromInterval(minR, maxR);
  const x = getFromInterval(0, fieldWidth);
  const y = getFromInterval(0, fieldHeight);
  const shape = new Hexagon(x, y, side, genRandomVelocity());
  const halfHeight = shape.height / 2;
  shape.x = getFromInterval(side, fieldWidth - side);
  shape.y = getFromInterval(halfHeight, fieldHeight - halfHeight);
  return shape;
};

export { makeRectangle, makeCircle, makeTriangle, makeHexagon };
