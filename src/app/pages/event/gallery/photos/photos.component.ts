import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileStore, GalleryData, PaginatedFiles } from '@core/data/galley';
import {EventsData} from "@core/data/events";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  currentPaginatedFiles: PaginatedFiles;
  mediaList: FileStore[];

  isModalOpen = false;
  selectedMedia: FileStore;

  scrollThreshold = 400;
  loading = false;

  constructor(private eventService: EventsData, private galleryService: GalleryData, private router: Router) {
  }

  ngOnInit(): void {
    this.galleryService.getFiles(this.eventService.eventCode).subscribe({
      next: (paginatedFiles) => {
        this.currentPaginatedFiles = paginatedFiles
        this.mediaList = paginatedFiles.results;
        this.loadMoreFiles();
      }
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    console.log('scroll')
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset;

    if (scrollHeight - (windowHeight + scrollTop) < this.scrollThreshold && !this.loading) {
      this.loadMoreFiles();
    }
  }

  loadMoreFiles(): void {
    if (this.currentPaginatedFiles && this.currentPaginatedFiles.next && !this.loading) {
      this.loading = true;
      const nextPage = this.currentPaginatedFiles.next.split('=').pop();
      this.galleryService.getFiles(nextPage).subscribe({
        next: (paginatedFiles: PaginatedFiles) => {
          this.currentPaginatedFiles = paginatedFiles;
          this.mediaList.push(...paginatedFiles.results);
          this.loading = false;
        },
        error: (error: any) => {
          console.error('Errore durante il caricamento delle foto:', error);
          this.loading = false;
        }
      });
    }
  }

  openModal(photo: FileStore): void {
    this.selectedMedia = photo;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  navigateToUpload() {
    this.router.navigateByUrl(`/${this.eventService.eventCode}/gallery/upload`).then();
  }

}
