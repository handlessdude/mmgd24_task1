import { Circle } from 'src/entities/circle';
import { BoundingBox, Polygon, Vector2d } from 'src/models/linal';
import {
  add,
  arMean,
  dot,
  getNormalToVec,
  mult,
  normalize,
  pointsDistance,
  sub,
} from 'src/utils/linal';

const AABBOverlap = (a: BoundingBox, b: BoundingBox) => {
  const d1x = b.left - a.right;
  const d1y = b.top - a.bottom;
  const d2x = a.left - b.right;
  const d2y = a.top - b.bottom;
  if (d1x > 0.0 || d1y > 0.0) return false;
  if (d2x > 0.0 || d2y > 0.0) return false;
  return true;
};

const checkCirclesCollision = (first: Circle, second: Circle) => {
  const centersDistSqr =
    Math.pow(first.center.x - second.center.x, 2) +
    Math.pow(first.center.y - second.center.y, 2);
  const radiusSumSqr = Math.pow(first.radius + second.radius, 2);
  return centersDistSqr <= radiusSumSqr;
};

const getAxes = (poly: Polygon) => {
  const axes: Vector2d[] = [];
  const points = poly.points;
  for (let i = 0; i < points.length; i++) {
    const p1 = points[i];
    const p2 = points[(i + 1) % points.length];
    if (!p1 || !p2)
      throw new Error(`Error calculating normals to poly: ${points}`);
    const edge = sub(p2, p1);
    const perpendicular = getNormalToVec(edge);
    axes.push(perpendicular);
  }
  return axes;
};

const projectPoints = (
  points: Vector2d[],
  axis: Vector2d,
): { min: number; max: number } => {
  let min = Number.MAX_VALUE;
  let max = -Number.MAX_VALUE;

  for (const vertex of points) {
    const projected = dot(vertex, axis);
    if (projected < min) min = projected;
    if (projected > max) max = projected;
  }

  return { min, max };
};

const projectPolygon = (
  axis: Vector2d,
  poly: Polygon,
): { min: number; max: number } => projectPoints(poly.points, axis);

const overlap = (
  interval1: { min: number; max: number },
  interval2: { min: number; max: number },
): boolean => interval1.min <= interval2.max && interval1.max >= interval2.min;

const doPolygonsCollide = (first: Polygon, second: Polygon) => {
  const axes = getAxes(first).concat(getAxes(second));
  for (const axis of axes) {
    const projection1 = projectPolygon(axis, first);
    const projection2 = projectPolygon(axis, second);
    if (!overlap(projection1, projection2)) {
      return false;
    }
  }
  return true;
};

const findClosestPointOnPolygon = (
  circleCenter: Vector2d,
  points: Vector2d[],
): number => {
  let result = -1;
  let minDistance = Number.MAX_VALUE;

  for (let i = 0; i < points.length; i++) {
    const v = points[i];
    const distance = pointsDistance(v, circleCenter);

    if (distance < minDistance) {
      minDistance = distance;
      result = i;
    }
  }

  return result;
};

const projectCircle = (
  center: Vector2d,
  radius: number,
  axis: Vector2d,
): { min: number; max: number } => {
  const direction = normalize(axis);
  const directionAndRadius = mult(direction, radius);

  const p1 = add(center, directionAndRadius);
  const p2 = sub(center, directionAndRadius);

  let min = dot(p1, axis);
  let max = dot(p2, axis);

  if (min > max) {
    const t = min;
    min = max;
    max = t;
  }

  return { min, max };
};

const doCirclePolygonCollide = (circle: Circle, polygon: Polygon): boolean => {
  const circleCenter = circle.center;
  const circleRadius = circle.radius;
  const points = polygon.points;

  let axis: Vector2d = { x: 0, y: 0 };

  for (let i = 0; i < points.length; i++) {
    const va = points[i];
    const vb = points[(i + 1) % points.length];

    const edge = sub(vb, va);
    axis = getNormalToVec(edge);

    const { min: minA, max: maxA } = projectPoints(points, axis);
    const { min: minB, max: maxB } = projectCircle(
      circleCenter,
      circleRadius,
      axis,
    );

    if (minA >= maxB || minB >= maxA) {
      return false;
    }
  }

  const closestPointIdx = findClosestPointOnPolygon(circleCenter, points);
  const closestPoint = points[closestPointIdx];

  axis = sub(closestPoint, circleCenter);
  axis = normalize(axis);

  const { min: minA, max: maxA } = projectPoints(points, axis);
  const { min: minB, max: maxB } = projectCircle(
    circleCenter,
    circleRadius,
    axis,
  );
  return !(minA >= maxB || minB >= maxA);
};

export {
  checkCirclesCollision,
  AABBOverlap,
  doPolygonsCollide,
  doCirclePolygonCollide,
};
