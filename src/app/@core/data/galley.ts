import {Observable} from "rxjs";

export interface Gallery {
  id?: number;
  src: string;
}


export abstract class GalleryData {
  abstract getGallery(): Observable<Gallery[]>;
}
