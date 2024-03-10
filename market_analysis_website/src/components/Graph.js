import React, { Component} from 'react';
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
        <div className='combochart'>{this.state.comboChartData}</div>
        <div className='piechart'>{this.state.pieChartData}</div>
        {/* Add GeoChart here */}
        <div className='geochart'>
        <div style={{ width: '100%', height: '500px' }}>
          {/* Insert GeoChart component here */}
          <Chart
            width={'100vw'}
            height={'500px'}
            chartType="GeoChart"
            
            loader={<div>Loading Chart</div>}
            data={[
              ['Country', 'Popularity'],
              ['Germany', 200],
              ['United States', 300],
              ['Brazil', 400],
              ['Canada', 500],
              ['France', 600],
              ['RU', 700]
            ]}
            options={{
              title: 'Popularity of Countries',
              legend: 'none',
              colorAxis: { colors: ['#e7711c', '#4374e0'] },
              fontSize: 12,
              fontName: 'Arial',
              labels: 'both' // or 'none', 'in', 'out'
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </div>
        </div>
      </div>
    );
  }
}

