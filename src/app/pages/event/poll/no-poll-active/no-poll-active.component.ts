import {Component, Input, OnInit} from '@angular/core';
import {Poll} from "@core/data/poll";

@Component({
  selector: 'app-no-poll-active',
  templateUrl: './no-poll-active.component.html',
  styleUrls: ['./no-poll-active.component.css']
})
export class NoPollActiveComponent implements OnInit {

  @Input() nextPoll: Poll | null;

  constructor() { }

  ngOnInit(): void {
  }

}
