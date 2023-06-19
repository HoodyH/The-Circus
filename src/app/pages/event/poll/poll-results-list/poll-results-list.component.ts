import { Component, Input, OnInit } from '@angular/core';
import { PollCountResult } from '@core/data/poll';

@Component({
  selector: 'app-poll-results-list',
  templateUrl: './poll-results-list.component.html',
  styleUrls: ['./poll-results-list.component.css']
})
export class PollResultsListComponent {

  @Input() results: PollCountResult[];

}
