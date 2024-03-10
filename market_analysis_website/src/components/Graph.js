import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

export class Graph extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [
      ['Feedback', 'Numbers'],
      ['Positive', 11],
      ['Negative', 2],
      ['Neutral', 2],

    ];

    const options = {
      title: 'Concluded Feedback of Market',
      pieHole: 0.4
    };

    const chart = (
      <Chart
        width={'900px'}
        height={'500px'}
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
