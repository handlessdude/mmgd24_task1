class NoCanvasFoundError extends Error {
  constructor() {
    super('No canvas found on page.');
    this.name = 'NoCanvasFoundError';
  }
}

export { NoCanvasFoundError };
