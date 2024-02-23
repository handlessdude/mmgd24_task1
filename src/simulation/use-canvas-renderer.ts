import { NoCanvasFoundError } from 'src/exceptions';
import { Shape2d } from 'src/entities/shape2d';
import Rectangle from 'src/entities/rectangle';

const useCanvasRenderer = () => {
  const canvas: HTMLCanvasElement = document.getElementById(
    'cnvs',
  ) as HTMLCanvasElement;
  const context: CanvasRenderingContext2D = canvas.getContext(
    '2d',
  ) as CanvasRenderingContext2D;
  if (!canvas || !context) throw new NoCanvasFoundError();

  const clearCanvas = () => {
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const draw = (shapes: Array<Shape2d>) => {
    clearCanvas();
    shapes.forEach((shape) => {
      if (shape instanceof Rectangle) {
        context.beginPath();
        context.rect(shape.x, shape.y, shape.w, shape.h);
        context.fillStyle = shape.color;
        context.fill();
      }
      // TODO add other shape types
    });
  };

  const setupRenderer = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  return {
    setupRenderer,
    draw,
  };
};

export { useCanvasRenderer };
