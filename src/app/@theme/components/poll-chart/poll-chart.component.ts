import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-poll-chart',
  templateUrl: './poll-chart.component.html',
  styleUrls: ['./poll-chart.component.css']
})
export class PollChartComponent implements OnChanges {

  @Input() results: { firstName: string, lastName: string, count: number }[];

  chartOptions: any;

  ngOnChanges(changes: SimpleChanges) {

    if (changes['results'] && changes['results'].currentValue) {
      const data = this.results.slice(0, 5);

      this.chartOptions = {
        tooltip: {},
        xAxis: {
          data: data.map(item => `${item.firstName} ${item.lastName}`),
          axisLabel: {
            interval: 0,
            formatter: function (value: string) {    
              return value.split(' ').join('\n');
            }
          }
        },
        yAxis: {
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: [{
          name: 'Voti',
          type: 'bar',
          data: data.map(item => item.count),
          itemStyle: {
            color: function(params: any) {
              const medalColors = ['gold', 'silver', '#CD7F32'];
              return params.dataIndex < 3 ? medalColors[params.dataIndex] : '#eee';
            },
            borderRadius: [10, 10, 0, 0],
          },
          label: {
            show: true,
            position: 'top'
          }
        }]
      };
    }
  }
}
