import { Shape2d } from 'src/entities/shape2d';
import { BoundingBox } from 'src/models/linal';
import {
  makeCircle,
  makeHexagon,
  makeRectangle,
  makeTriangle,
} from 'src/utils/shape-factories';
import { genNSamples, negate } from 'src/utils';

const nSamples = 10;

// help me p[l;ease
const useSimulationState = (field: () => { width: number; height: number }) => {
  const buildRandomShapes = (): Array<Shape2d & BoundingBox> => {
    const rectangles = genNSamples(nSamples, () => makeRectangle(field));
    const circles = genNSamples(nSamples, () => makeCircle(field));
    const triangles = genNSamples(nSamples, () => makeTriangle(field));
    const hexagons = genNSamples(nSamples, () => makeHexagon(field));
    return [rectangles, circles, triangles, hexagons].flat();
  };

  const simulationState = {
    shapes: [] as Array<Shape2d & BoundingBox>,
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

  const hasReachedBorders = (shape: BoundingBox) => {
    const { width, height } = field();
    return (
      shape.left <= 0 ||
      shape.right >= width ||
      shape.top <= 0 ||
      shape.bottom >= height
    );
  };

  const update = (/*tick: number*/) => {
    simulationState.shapes.forEach((shape) => {
      if (hasReachedBorders(shape)) {
        shape.velocity = negate(shape.velocity);
      }
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
