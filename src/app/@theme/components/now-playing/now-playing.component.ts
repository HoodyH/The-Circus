import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {

  @Input() song: { title: string, artist: string, imageUrl?: string };
  @Input() currentTime: string;
  @Input() remainingTime: string;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Calculate progress
   */
  get progressPercentage(): string {
    return `${(parseFloat(this.currentTime) / (parseFloat(this.currentTime) + parseFloat(this.remainingTime))) * 100}%`;
  }

}
