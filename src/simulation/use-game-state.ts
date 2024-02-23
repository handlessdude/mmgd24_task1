import Rectangle from 'src/entities/rectangle';

const useSimulationState = () => {
  const simulationState = {
    shapes: [
      new Rectangle(10, 10, 20, 20, 1, 0),
      new Rectangle(500, 10, 20, 20, -1, 0),
    ],
    lastTick: 0,
    lastRender: 0,
    tickLength: 15, //ms
    stopCycle: 0,
  };

  const setupSimulationState = () => {
    simulationState.lastTick = performance.now();
    simulationState.lastRender = simulationState.lastTick;
    simulationState.tickLength = 15; //ms
  };

  const update = (/*tick: number*/) => {
    simulationState.shapes.forEach((r: Rectangle) => {
      r.x += r.vx;
      r.y += r.vy;
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
