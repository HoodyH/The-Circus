import {Component, OnInit} from '@angular/core';
import { GalleryData, Gallery, FileStore } from '@app/@core/data/galley';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  gallery: Gallery;
  file: FileStore

  selectedFile: File;
  previewImageSrc: string;
  uploading: boolean = false;

  constructor(private galleryService: GalleryData) {}

  ngOnInit() {
    this.galleryService.getGallery().subscribe({
      next: (gallery) => {
        this.gallery = gallery;
      }
    });
  }

  resetFile() {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewImageSrc = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  uploadPhoto(event: Event) {
    event.preventDefault();

    if (this.selectedFile) {     

      this.uploading = true; 

      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      formData.append('gallery', this.gallery.id.toString());
      formData.append('type', this.selectedFile.type);

      this.galleryService.postFile(formData).subscribe({
        next: (data) => { 
          this.file = data 
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      });
    }
  }

}
