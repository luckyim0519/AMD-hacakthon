import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

export class Piechart extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ];

    const options = {
      title: 'My Daily Activities',
      pieHole: 0.4
    };

    const chart = (
      <Chart
        width={'100vw'}
        height={'60vh'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={options}
      />
    );

    this.setState({ chart });
  }

  render() {
    return <div>{this.state && this.state.chart}</div>;
  }
};
