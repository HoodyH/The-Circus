import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-results-list',
  templateUrl: './poll-results-list.component.html',
  styleUrls: ['./poll-results-list.component.css']
})
export class PollResultsListComponent {
  
  @Input() results: { firstName: string, lastName: string, count: number }[];

}
