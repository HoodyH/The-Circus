import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FileStore} from "@core/data/galley";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnChanges {

  @Input() slidingTimeSeconds: number = 10;
  @Input() slidingVideoMaxTimeSeconds: number = 30;
  @Input() files: FileStore[] = [];
  @Output() lastScrolledPhoto: EventEmitter<FileStore> = new EventEmitter<FileStore>();
  
  currentFile: FileStore;
  timeout: any
    
  ngOnInit(): void {
    this.displayFile();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['files'] && changes['files'].currentValue && changes['files'].currentValue.length && !changes['files'].firstChange) {
      this.displayFile();
    }
  }

  /**
   * Load file to display and calculate next interaction
   */
  displayFile() {
    if (this.files && this.files.length > 0 ) {
      this.currentFile = this.files.pop()!;
      if (this.currentFile.type !== 'video/mp4') {
        this.setNextInteraction(this.slidingTimeSeconds);
      } else {
        // set a max time anyway so 
        this.setNextInteraction(this.slidingVideoMaxTimeSeconds);
      }
    } else {
      this.lastScrolledPhoto.emit(this.currentFile);
      this.setNextInteraction(this.slidingTimeSeconds);
    }
  }

  /**
   * On video play get the duration
   * 
   * @param event video play event
   */
  calculateVideoTime(event: any) {
    let timeout = Math.floor(event.target.duration);
    if (timeout > this.slidingTimeSeconds) { timeout = this.slidingTimeSeconds; }
    this.setNextInteraction(timeout);
  }

  /**
   * Before creating a new timout clear the previous one
   * 
   * @param time seconds delay
   */
  setNextInteraction(time: number) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {this.displayFile()}, time * 1000);
  }

}
