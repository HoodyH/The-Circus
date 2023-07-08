import {Component, OnInit} from '@angular/core';
import { GalleryData, Gallery, FileStore } from '@core/data/galley';
import {Router} from "@angular/router";
import {EventsData} from "@core/data/events";

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
  error: boolean = false;
  errorMessage: string = '';

  constructor(private eventService: EventsData, private galleryService: GalleryData, private router: Router) {}

  ngOnInit() {
    this.galleryService.getGallery(this.eventService.eventCode).subscribe({
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
      formData.append('content', this.selectedFile, this.selectedFile.name);
      formData.append('gallery', this.gallery.id.toString());
      formData.append('type', this.selectedFile.type);

      this.galleryService.postFile(formData).subscribe({
        next: (data) => {
          this.file = data
          setTimeout(() => {
            this.router.navigateByUrl(`/${this.eventService.eventCode}/gallery/photos`).then();
          }, 3000);
        },
        error: (e) => {
          this.error = true;
          console.log(e);
          if (e.error.code) {
            switch (e.error.code[0]) {
              case "size": {
                this.errorMessage = "file superiore a 10 mega";
                break;
              }
              case "participant": {
                this.errorMessage = "non sei un partecipante all'evento";
                break;
              }
              case "cooldown": {
                this.errorMessage = "puoi caricare massimo una foto al minuto";
                break;
              }
            }
          }
          setTimeout(() => {
            this.router.navigateByUrl(`/${this.eventService.eventCode}`).then();
          },
          3000);
        }
      });
    }
  }

}
