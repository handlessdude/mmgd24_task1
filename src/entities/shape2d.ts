import { Color } from 'src/models/color';

class Shape2d {
  public x: number;
  public y: number;
  public color: Color; // TODO move to decorator

  constructor(x: number, y: number, color: Color = '#000000') {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}

export { Shape2d };
