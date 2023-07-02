import { Component, OnDestroy, OnInit } from '@angular/core';
import { LiveData } from '@app/@core/data/live';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit, OnDestroy {

  receivedData: LiveData[] = [];

  constructor(private liveService: LiveData) {}

  ngOnInit(): void {

    this.liveService.connectLiveSocket('event');

    this.liveService.liveSubject.subscribe({
      next: (data) => { this.receivedData.push(data) }
    })
  } 

  ngOnDestroy(): void {
    this.liveService.disconnectLiveSocket();
  }

}
