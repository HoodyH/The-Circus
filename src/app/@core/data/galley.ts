import {Observable} from "rxjs";
import { User } from "./users";

enum FileTypes {
  JPEG = 'image/jpeg',
  PNG = 'image/png',
  MP4 = 'video/mp4',
}

export interface FileUpload {
  gallery: number;
  type: string;
  file: any;
}

export interface FileStore {
  id: number;
  gallery: number;
  user: User;
  type: FileTypes;
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
  abstract getFiles(page?: number): Observable<PaginatedFiles>;
  abstract getFilesNextPage(next: string): Observable<PaginatedFiles>;
  abstract postFile(data: FormData): Observable<FileStore>;
}
