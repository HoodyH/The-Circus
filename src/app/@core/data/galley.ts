import {Observable} from "rxjs";
import { User } from "./users";

export interface FileUpload {
  gallery: number;
  type: string;
  file: any;
}


export interface FileStore {
  id: number;
  gallery: number;
  user: User;
  type: string;
  received_at: string;
  blob: string;
  url: string;
}

export interface PaginatedFiles {
  count: number;
  next: any;
  previous: any;
  results: FileStore[];
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
  abstract getFiles(): Observable<PaginatedFiles>;
  abstract postFile(data: FormData): Observable<FileStore>;
}
