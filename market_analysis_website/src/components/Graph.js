import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

export class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comboChartData: null,
      pieChartData: null
    };
  }

  componentDidMount() {
    this.drawComboChart();
    this.drawPieChart();
  }

  drawComboChart() {
    const comboData = [
      ['Years', 'Positive', 'Neutral', 'Negative'],
      ['2019', 50, 20, 30],
      ['2020', 60, 30, 10],
      ['2021', 50, 30, 20],
      ['2022', 70, 20, 10],
      ['2023', 60, 10, 30]
    ];

    const comboOptions = {
      title: 'The Trend of Market Sentiment in Years',
      vAxis: { title: 'Sentiment' },
      hAxis: { title: 'Years' },
      seriesType: 'bars',
     
    };

    const comboChart = (
      <Chart
        width={'100vw'}
        height={'500px'}
        chartType="ComboChart"
        loader={<div>Loading Chart</div>}
        data={comboData}
        options={comboOptions}
      />
    );

    this.setState({ comboChartData: comboChart });
  }

  drawPieChart() {
    const pieData = [
      ['Feedback', 'Numbers'],
      ['Positive', 11],
      ['Negative', 2],
      ['Neutral', 2]
    ];

    const pieOptions = {
      title: 'Concluded Feedback of Market',
      pieHole: 0.4
    };

    const pieChart = (
      <Chart
        width={'100vw'}
        height={'500px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={pieData}
        options={pieOptions}
      />
    );

    this.setState({ pieChartData: pieChart });
  }

  render() {
    return (
      <div>
        <div>{this.state.comboChartData}</div>
        <div>{this.state.pieChartData}</div>
      </div>
    );
  }
}
