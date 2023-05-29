import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFile: File;

  ngOnInit() {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadPhoto() {
    if (this.selectedFile) {
      // Esegui l'operazione di caricamento della foto qui
      // Puoi utilizzare ad esempio un servizio per inviare la foto al server
      console.log('Caricamento foto:', this.selectedFile);
    }
  }

}
