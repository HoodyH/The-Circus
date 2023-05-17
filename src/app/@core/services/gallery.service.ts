import {Injectable} from '@angular/core';
import {of as observableOf, Observable} from 'rxjs';
import {GalleryData, Gallery} from '@core/data/galley';

@Injectable()
export class GalleryService extends GalleryData {

  private eventData: Gallery[] = [{
    src: '_00bf5be5-8bef-4731-b8b0-4de1af09e981.jpg',
  },{
    src: '_3f17be17-0bb5-4bbf-aefa-63fc30da31b4.jpg',
  },{
    src: '_8e19d44d-a6a5-458d-a850-53fa6ea3e2f6.jpg',
  },{
    src: '_2016f259-5fa1-4b7a-a85b-41d134872162.jpg',
  },{
    src: '_cc4f0cc7-055f-4e92-b281-60a0896e0ce4.jpg',
  },{
    src: '_f3372cea-fbc7-48f2-ad8d-9db1d8ed1a62.jpg',
  }];

  getGallery(): Observable<Gallery[]> {
    return observableOf(this.eventData);
  }
}
