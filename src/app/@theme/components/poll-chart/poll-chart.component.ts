import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-chart',
  templateUrl: './poll-chart.component.html',
  styleUrls: ['./poll-chart.component.css']
})
export class PollChartComponent implements OnInit {

  chartOptions: any;

  ngOnInit() {
    this.chartOptions = {
      title: {
        text: 'Risultati del pool'
      },
      tooltip: {},
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E'] // Etichette sull'asse x
      },
      yAxis: {},
      series: [{
        name: 'Valori',
        type: 'bar',
        data: [10, 15, 7, 8, 12] // Valori delle barre
      }]
    };
  }

}
