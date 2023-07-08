import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiUrls} from '@core/data/api';
import {Gallery, GalleryData, FileStore, PaginatedFiles} from '@core/data/galley';


@Injectable()
export class GalleryService extends GalleryData {

  constructor(private http: HttpClient) {
    super();
  }

  getGallery(eventCode: string): Observable<Gallery> {
    return this.http.get<Gallery>(`${ApiUrls.U_GALLERY(eventCode)}`);
  }

  getFiles(eventCode: string, page: number = 1): Observable<PaginatedFiles> {
    return this.http.get<PaginatedFiles>(`${ApiUrls.U_GALLERY_FILES()}?gallery__event__code=${eventCode}&page=${page}`);
  }

  getFilesNextPage(next: string): Observable<PaginatedFiles> {
    return this.http.get<PaginatedFiles>(next);
  }

  postFile(data: FormData): Observable<FileStore> {
    return this.http.post<FileStore>(`${ApiUrls.U_GALLERY_UPLOAD()}`, data);
  }
}
