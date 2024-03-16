import { Shape2d } from 'src/entities/shape2d';
import { BoundingBox } from 'src/models/linal';
import {
  makeCircle,
  makeHexagon,
  makeRectangle,
  makeTriangle,
} from 'src/utils/shape-factories';
import { genNSamples, negate } from 'src/utils';
import { mult } from 'src/utils/linal';

const nSamples = 70;

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

  const killShapes = false;

  const update = (/*tick: number*/) => {
    const shapesToDelete = new Set<Shape2d & BoundingBox>();
    const beenHitBy = new Map<Shape2d & BoundingBox, Shape2d & BoundingBox>();
    simulationState.shapes.forEach((shape) => {
      simulationState.shapes.forEach((otherShape) => {
        if (shapesToDelete.has(otherShape)) return;
        if (shape === otherShape) return;
        if (!shape.intersects(otherShape)) return;
        shape.velocity = mult(negate(shape.velocity), 2);
        otherShape.velocity = mult(negate(otherShape.velocity), 2);
        if (
          beenHitBy.get(shape) === otherShape ||
          beenHitBy.get(otherShape) === shape
        )
          return;
        beenHitBy.set(shape, otherShape);
        beenHitBy.set(otherShape, shape);
        if (!killShapes) return;
        if (shape.health >= 1) {
          shape.health -= 1;
          if (shape.health < 1) shapesToDelete.add(shape);
        }
        if (otherShape.health >= 1) {
          otherShape.health -= 1;
          if (otherShape.health < 1) shapesToDelete.add(otherShape);
        }
      });
      if (shapesToDelete.has(shape)) return;
      if (hasReachedBorders(shape)) {
        shape.velocity = negate(shape.velocity);
      }
      shape.x += shape.velocity.x;
      shape.y += shape.velocity.y;
    });
    if (!killShapes) return;
    simulationState.shapes = simulationState.shapes.filter(
      (shape) => !shapesToDelete.has(shape),
    );
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
