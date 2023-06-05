import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeModule} from "@theme/theme.module";
import {GalleryRoutingModule} from "@app/pages/gallery/gallery-routing.module";

// Components
import {GalleryComponent} from './gallery.component';
import {UploadComponent} from './upload/upload.component';
import { PhotosComponent } from './photos/photos.component';


@NgModule({
  declarations: [
    GalleryComponent,
    UploadComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule {
}
