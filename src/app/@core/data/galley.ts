import {Observable} from "rxjs";
import { User } from "./users";

enum FileTypes {
  JPEG = 'image/jpeg',
  PNG = 'image/png',
  MP4 = 'video/mp4',
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
  description: string;
  disclaimer: string;
  files: FileStore[];
}


export abstract class GalleryData {
  abstract getGallery(eventCode: string): Observable<Gallery>;
  abstract getFiles(eventCode: string, page?: number): Observable<PaginatedFiles>;
  abstract getFilesNextPage(next: string): Observable<PaginatedFiles>;
  abstract postFile(data: FormData): Observable<FileStore>;
}
