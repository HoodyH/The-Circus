import {Observable} from "rxjs";
import { User } from "./users";

export interface FileUpload {
  gallery: number;
  type: string;
  file: any;
}


export interface FileStore {
  gallery: number;
  user: User;
  type: string;
  received_at: string;
  blob: string;
  url: string;
}

export interface Gallery {
  id: number;
  container: string;
  event: number;
  files: FileStore[];
}

export interface StaticGallery {
  src: string;
}


export abstract class GalleryData {
  abstract getStaticGallery(): Observable<StaticGallery[]>;
  abstract getGallery(): Observable<Gallery>;
  abstract postFile(data: FormData): Observable<FileStore>;
}
