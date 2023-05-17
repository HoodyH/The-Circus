import {Injectable} from '@angular/core';
import {of as observableOf, Observable} from 'rxjs';
import {GalleryData, Gallery} from '@core/data/galley';

@Injectable()
export class GalleryService extends GalleryData {

  private eventData: Gallery[] = [{
    src: '8e19d44d-a6a5-458d-a850-53fa6ea3e2f6.jpg',
  },{
    src: '8e19d44d-a6a5-458d-a850-53fa6ea3e2f6.jpg',
  },{
    src: '8e19d44d-a6a5-458d-a850-53fa6ea3e2f6.jpg',
  }];

  getGallery(): Observable<Gallery[]> {
    return observableOf(this.eventData);
  }
}
