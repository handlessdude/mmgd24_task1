import Rectangle from 'src/entities/rectangle';
import { Shape2d } from 'src/entities/shape2d';
import { Circle } from 'src/entities/circle';
import { TriangleEquilateral } from 'src/entities/triangle-equilateral';
import { Hexagon } from 'src/entities/hexagon';

const minSide = 20;
const nSamples = 10;

const genRandomVelocity = () => ({
  x: 3 * (Math.random() * 2 - 1),
  y: 3 * (Math.random() * 2 - 1),
});

const useSimulationState = (field: () => { width: number; height: number }) => {
  const buildRandomShapes = (): Array<Shape2d> => {
    const { width, height } = field();
    const rectangles = Array.from(
      { length: nSamples },
      () =>
        new Rectangle(
          Math.random() * width,
          Math.random() * height,
          Math.random() * 50 + minSide,
          Math.random() * 50 + minSide,
          genRandomVelocity(),
        ),
    );
    const circles = Array.from(
      { length: nSamples },
      () =>
        new Circle(
          Math.random() * width,
          Math.random() * height,
          Math.random() * 20 + minSide,
          genRandomVelocity(),
        ),
    );
    const polygons = [TriangleEquilateral, Hexagon]
      .map((ShapeType) =>
        Array.from(
          { length: nSamples },
          () =>
            new ShapeType(
              Math.random() * width,
              Math.random() * height,
              Math.random() * 20 + minSide,
              genRandomVelocity(),
            ),
        ),
      )
      .flat();

    return [rectangles, circles, polygons].flat();
  };

  const simulationState = {
    shapes: [] as Array<Shape2d>,
    lastTick: 0,
    lastRender: 0,
    tickLength: 15, //ms
    stopCycle: 0,
  };

  const setupSimulationState = () => {
    simulationState.lastTick = performance.now();
    simulationState.lastRender = simulationState.lastTick;
    simulationState.tickLength = 15; //ms
    simulationState.shapes = buildRandomShapes();
  };

  const update = (/*tick: number*/) => {
    simulationState.shapes.forEach((shape: Shape2d) => {
      shape.x += shape.velocity.x;
      shape.y += shape.velocity.y;
    });
  };

  const runQueueUpdates = (numTicks: number) => {
    for (let i = 0; i < numTicks; i++) {
      simulationState.lastTick =
        simulationState.lastTick + simulationState.tickLength;
      update(/*simulationState.lastTick*/);
    }
  };

  return {
    simulationState,
    setupSimulationState,
    runQueueUpdates,
  };
};

export { useSimulationState };
