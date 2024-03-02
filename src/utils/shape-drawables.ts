import Rectangle from 'src/entities/rectangle';
import { Circle } from 'src/entities/circle';
import { TriangleEquilateral } from 'src/entities/triangle-equilateral';
import { Hexagon } from 'src/entities/hexagon';

const defaultColor = '#000000';
const healthToColorMap = {
  3: '#478665',
  2: '#d7c072',
  1: '#c94954',
};
type HealthStatus = keyof typeof healthToColorMap;

const drawRectangle = (context: CanvasRenderingContext2D, shape: Rectangle) => {
  context.beginPath();
  context.rect(shape.x, shape.y, shape.w, shape.h);
  context.fillStyle =
    healthToColorMap[shape.health as HealthStatus] || defaultColor;
  context.fill();
};

const drawCircle = (context: CanvasRenderingContext2D, shape: Circle) => {
  context.beginPath();
  context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
  context.fillStyle =
    healthToColorMap[shape.health as HealthStatus] || defaultColor;
  context.fill();
};

const drawEquilateralTriangle = (
  context: CanvasRenderingContext2D,
  shape: TriangleEquilateral,
) => {
  context.beginPath();
  context.moveTo(shape.left, shape.bottom);
  context.lineTo(shape.right, shape.bottom);
  context.lineTo(shape.x, shape.top);
  context.closePath();
  context.fillStyle =
    healthToColorMap[shape.health as HealthStatus] || defaultColor;
  context.fill();
};

const drawHexagon = (context: CanvasRenderingContext2D, shape: Hexagon) => {
  shape.points.forEach((p, idx, arr) => {
    if (idx === 0) {
      context.beginPath();
      context.moveTo(p.x, p.y);
      return;
    }
    context.lineTo(p.x, p.y);
    if (idx === arr.length - 1) context.closePath();
  });
  context.fillStyle =
    healthToColorMap[shape.health as HealthStatus] || defaultColor;
  context.fill();
};

export { drawRectangle, drawCircle, drawHexagon, drawEquilateralTriangle };
