import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

export class Piechart extends Component {
  parseCSVData(){
    const labels = [];
    const results = [];
    filePath = '/Users/luckyim/Desktop/AMD_hackathon/datasets/graph.csv';
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (row) => {
        // Assuming 'label' and 'result' are the column names in the CSV file
        labels.push(row.label);
        results.push(row.result);
      })
      .on('end', () => {
        // Print out the arrays after parsing
        console.log('Labels:', labels);
        console.log('Results:', results);
      });
  }

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
