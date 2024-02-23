import { useCanvasRenderer } from 'src/simulation/use-canvas-renderer';
import { useSimulationState } from 'src/simulation/use-game-state';

const useSimulation = () => {
  const { setupRenderer, draw, getField } = useCanvasRenderer();
  const { simulationState, setupSimulationState, runQueueUpdates } =
    useSimulationState(getField);

  const runSimulation = (tFrame: number = 0) => {
    simulationState.stopCycle = window.requestAnimationFrame(runSimulation);

    const nextTick = simulationState.lastTick + simulationState.tickLength;
    let numTicks = 0;

    if (tFrame > nextTick) {
      const timeSinceTick = tFrame - simulationState.lastTick;
      numTicks = Math.floor(timeSinceTick / simulationState.tickLength);
    }
    runQueueUpdates(numTicks);
    draw(simulationState.shapes);
    simulationState.lastRender = tFrame;
  };

  const stopSimulation = () => {
    window.cancelAnimationFrame(simulationState.stopCycle);
  };

  const setupSimulation = () => {
    setupRenderer();
    setupSimulationState();
  };

  return {
    setupSimulation,
    runSimulation,
    stopSimulation,
  };
};

export { useSimulation };
