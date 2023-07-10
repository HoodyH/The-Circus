import {Component, Input, OnInit} from '@angular/core';
import { FileStore } from '@app/@core/data/galley';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() gallery: any[] = [];

  @Input() mediaList: FileStore[];

  isModalOpen = false;
  selectedMedia: FileStore;

  constructor() { }

  ngOnInit(): void {
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

}
