import * as React from 'react';

import { Section } from '../../../components/section';
import { IDeal } from '../../../models/deal';
import { getTime } from '../../../utils';
import * as styles from './index.css';

export interface IDealListChartProps {
  deals: IDeal[];
}

interface ICoordinate {
  x: number;
  y: number;
}

const GRID_SIZE = 60;

export class DealListChart extends React.PureComponent<IDealListChartProps, {}> {
  private canvas: HTMLCanvasElement | null;

  public componentDidUpdate() {
    this.updateCanvas();
  }

  public updateCanvas() {
    if (!this.canvas) {
      return;
    }

    const context = this.canvas.getContext('2d');
    if (context) {
      context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      const start: ICoordinate = {
        x: 2,
        y: 2,
      };
      context.translate(0.5, 0.5);

      const width = GRID_SIZE * 10;
      const height = GRID_SIZE * 5;

      drawVerticalLines(context, start, height);
      drawHorizontalLines(context, start, width, this.getTopBound());
      drawBorders(context, start, width, height);
      drawPoints(context, start, width, height, this.getPoints(width, height));
    }
  }

  public render() {
    return (
      <Section title="Current deals">
        <canvas
          className={styles['canvas']}
          width="730" height="330"
          ref={(ref) => this.canvas = ref}
        />
      </Section>
    );
  }

  private getTopBound(): number {
    const values = this.props.deals.map(({ value }) => value);

    if (values.length === 0) {
      return 5;
    }

    const max = Math.max.apply(null, values);
    let result = Math.ceil(max);

    while (result <= max || result % 5 !== 0) {
      result += 1;
    }

    return result;
  }

  private getPoints(width: number, height: number): ICoordinate[] {
    const topBound = this.getTopBound();
    const yPoint = topBound / height;
    const xPoint = width / (10 * 60);

    const now = new Date();
    const tenMinutesAgo = new Date();
    tenMinutesAgo.setMinutes(now.getMinutes() - 10);

    return this.props.deals.map(deal => {
      let seconds = (new Date(deal.date)).getTime() - tenMinutesAgo.getTime();
      seconds = seconds / 1000;

      return {
        x: seconds / xPoint,
        y: deal.value / yPoint,
      };
    });
  }
}

function drawVerticalLines(
  context: CanvasRenderingContext2D,
  start: ICoordinate,
  chartHeight: number,
) {
  const minutes = getLastElevenMinutes();
  const columnsCount = 11;

  context.moveTo(start.x, start.y);
  context.beginPath();
  context.font = '14px Helvetica';
  context.fillStyle = '#494949';
  context.strokeStyle = '#979797';
  context.lineWidth = 1;

  let width = start.x;
  for (let i = 0; i < columnsCount; i++) {
    context.moveTo(width, 2);
    context.lineTo(width, chartHeight + 1);

    let textPosition = width - 18;
    if (width === start.x) {
      textPosition = width;
    }

    if (i + 1 === columnsCount) {
      textPosition = textPosition - 16;
    }

    context.fillText(minutes[i], textPosition, chartHeight + 20);
    width += GRID_SIZE;
  }
  context.stroke();
  context.closePath();
}

function drawHorizontalLines(
  context: CanvasRenderingContext2D,
  start: ICoordinate,
  chartWidth: number,
  topBound: number,
) {
  const rowsCount = 6;
  const step = Math.round(topBound / 5);

  context.moveTo(start.x, start.y);
  context.beginPath();
  context.strokeStyle = '#979797';
  context.lineWidth = 1;

  let height = start.y;
  for (let i = 0; i < rowsCount; i++) {
    context.moveTo(2, height);
    context.lineTo(chartWidth + 1, height);

    let textPosition = height + 3;
    if (i === 0) {
      textPosition = height + 10;
    }

    if (i + 1 === rowsCount) {
      textPosition = textPosition - 5;
    }

    context.fillText((topBound - step * i).toFixed(2), chartWidth + 7, textPosition);

    height += GRID_SIZE;
  }
  context.stroke();
  context.closePath();
}

function drawBorders(
  context: CanvasRenderingContext2D,
  start: ICoordinate,
  width: number,
  height: number,
) {
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.strokeRect(start.x, start.y, width, height);
}

function getLastElevenMinutes(): string[] {
  const now = new Date();
  const minutes: string[] = [];

  for (let i = 10; i >= 0; i--) {
    const temp = new Date();
    temp.setMinutes(now.getMinutes() - i);
    minutes.push(getTime(temp));
  }

  return minutes;
}

function drawPoints(
  context: CanvasRenderingContext2D,
  start: ICoordinate,
  width: number,
  height: number,
  points: ICoordinate[],
) {
  context.beginPath();
  context.strokeStyle = '#4A90E2';
  context.lineWidth = 3;

  points.forEach((point, index) => {
    const y = height - point.y;

    if (index > 0) {
      context.lineTo(point.x, y);
    }
    context.moveTo(point.x, y);
  });
  context.stroke();
  context.closePath();

  points.forEach((point, index) => {
    const y = height - point.y;

    context.beginPath();
    context.arc(point.x, y, 4, 0, 2 * Math.PI, true);
    context.fill();
    context.closePath();
  });
}
