import { NoCanvasFoundError } from 'src/exceptions';
import { Shape2d } from 'src/entities/shape2d';
import Rectangle from 'src/entities/rectangle';
import { TriangleEquilateral } from 'src/entities/triangle-equilateral';
import { Hexagon } from 'src/entities/hexagon';
import { Circle } from 'src/entities/circle';

const useCanvasRenderer = () => {
  const canvas: HTMLCanvasElement = document.getElementById(
    'cnvs',
  ) as HTMLCanvasElement;
  const context: CanvasRenderingContext2D = canvas.getContext(
    '2d',
  ) as CanvasRenderingContext2D;
  if (!canvas || !context) throw new NoCanvasFoundError();

  const clearCanvas = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const drawRectangle = (shape: Rectangle) => {
    context.beginPath();
    context.rect(shape.x, shape.y, shape.w, shape.h);
    context.fillStyle = shape.color;
    context.fill();
  };

  const drawCircle = (shape: Circle) => {
    context.beginPath();
    context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
    context.fillStyle = shape.color;
    context.fill();
  };

  const drawEquilateralTriangle = (shape: TriangleEquilateral) => {
    context.beginPath();
    context.moveTo(shape.left, shape.bottom);
    context.lineTo(shape.right, shape.bottom);
    context.lineTo(shape.x, shape.top);
    context.closePath();
    context.fillStyle = shape.color;
    context.fill();
  };

  const drawHexagon = (shape: Hexagon) => {
    const angleDeg = 60; // Angle between each side of the hexagon
    Array.from({ length: 6 }, (_, i) => {
      const angleRad = (Math.PI / 180) * (angleDeg * i);
      const x = shape.x + shape.side * Math.cos(angleRad);
      const y = shape.y + shape.side * Math.sin(angleRad);
      return { x, y };
    }).forEach((p, idx, arr) => {
      if (idx === 0) {
        context.beginPath();
        context.moveTo(p.x, p.y);
        return;
      }
      context.lineTo(p.x, p.y);
      if (idx === arr.length - 1) context.closePath();
    });
    context.fillStyle = shape.color;
    context.fill();
  };

  const draw = (shapes: Array<Shape2d>) => {
    clearCanvas();
    shapes.forEach((shape) => {
      if (shape instanceof Rectangle) {
        drawRectangle(shape);
      } else if (shape instanceof Circle) {
        drawCircle(shape);
      } else if (shape instanceof TriangleEquilateral) {
        drawEquilateralTriangle(shape);
      } else if (shape instanceof Hexagon) {
        drawHexagon(shape);
      }
    });
  };

  const setupRenderer = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  return {
    setupRenderer,
    draw,
    getField: () => ({
      width: canvas.width,
      height: canvas.height,
    }),
  };
};

export { useCanvasRenderer };
