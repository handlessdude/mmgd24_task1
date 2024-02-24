import { NoCanvasFoundError } from 'src/exceptions';
import { Shape2d } from 'src/entities/shape2d';
import Rectangle from 'src/entities/rectangle';
import { TriangleEquilateral } from 'src/entities/triangle-equilateral';
import { Hexagon } from 'src/entities/hexagon';
import { Circle } from 'src/entities/circle';
import {
  drawCircle,
  drawEquilateralTriangle,
  drawHexagon,
  drawRectangle,
} from 'src/utils/shape-drawables';

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

  const draw = (shapes: Array<Shape2d>) => {
    clearCanvas();
    shapes.forEach((shape) => {
      if (shape instanceof Rectangle) {
        drawRectangle(context, shape);
      } else if (shape instanceof Circle) {
        drawCircle(context, shape);
      } else if (shape instanceof TriangleEquilateral) {
        drawEquilateralTriangle(context, shape);
      } else if (shape instanceof Hexagon) {
        drawHexagon(context, shape);
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
