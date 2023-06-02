import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileStore, GalleryData, PaginatedFiles } from '@core/data/galley';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  paginatedFiles: PaginatedFiles;
  mediaList: FileStore[];

  isModalOpen = false;
  selectedMedia: FileStore;

  scrollContainer: HTMLElement;
  scrollThreshold = 200;
  loading = false;

  constructor(private galleryService: GalleryData, private router: Router) {
  }

  ngOnInit(): void {
    this.galleryService.getFiles().subscribe({
      next: (paginatedFiles) => {
        this.paginatedFiles = paginatedFiles
        this.mediaList = paginatedFiles.results;
      }
    })
  }

  onScroll(): void {
    const scrollHeight = this.scrollContainer.scrollHeight;
    const scrollTop = this.scrollContainer.scrollTop;
    const clientHeight = this.scrollContainer.clientHeight;

    if (scrollHeight - scrollTop - clientHeight < this.scrollThreshold && !this.loading) {
      this.loadMoreFiles();
    }
  }

  loadMoreFiles(): void {
    if (this.paginatedFiles.next && !this.loading) {
      this.loading = true;
      this.galleryService.getFiles(this.paginatedFiles.next).subscribe({
        next: (paginatedFiles: PaginatedFiles) => {
          this.paginatedFiles = paginatedFiles;
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

  downloadMedia(photo: FileStore): void {
    const link = document.createElement('a');
    link.href = photo.url;
    link.download = `photo_${photo.id}.jpg`;
    link.click();
  }

  shareMedia(media: FileStore) {
    if (navigator.share) {
      navigator.share({
        title: 'Condividi media',
        text: 'Guarda questo media interessante!',
        url: media.url
      })
        .then(() => console.log('Media condiviso con successo.'))
        .catch((error) => console.log('Errore durante la condivisione del media:', error));
    }
  }

  navigateToUpload() {
    this.router.navigateByUrl('/gallery/upload').then();
  }

}
