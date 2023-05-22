import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Poll} from "@core/data/poll";
import {Participant} from "@core/data/events";
import {EChartsOption} from "echarts";

@Component({
  selector: 'app-poll-chart',
  templateUrl: './poll-chart.component.html',
  styleUrls: ['./poll-chart.component.css']
})
export class PollChartComponent implements OnChanges {

  @Input() poll: Poll

  chartOptions: any;

  ngOnChanges(changes: SimpleChanges) {

    if (changes['poll'] && changes['poll'].currentValue) {
      const counts: { [key: number]: { firstName: string, lastName: string, count: number } } = {};

      for (const element of this.poll.votes) {
        const vote: Participant = element.vote;

        if (vote.user.id in counts) {
          counts[vote.user.id]['count']++;
        } else {
          counts[vote.user.id] = {
            firstName: vote.user.first_name,
            lastName: vote.user.last_name,
            count: 1
          };
        }
      }

      const sortedCounts = Object.values(counts).sort((a, b) => b.count - a.count).slice(0, 5);
      console.log(sortedCounts);

      this.chartOptions = {
        title: {
          text: this.poll.question
        },
        tooltip: {},
        xAxis: {
          data: sortedCounts.map(item => `${item.firstName} ${item.lastName}`)
        },
        yAxis: {},
        series: [{
          name: 'Voti',
          type: 'bar',
          data: sortedCounts.map(item => item.count)
        }]
      };
    }
  }
}
