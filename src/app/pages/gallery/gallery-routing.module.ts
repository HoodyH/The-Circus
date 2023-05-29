import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "@core/guards/auth.guard";
import {GalleryComponent} from "./gallery.component";
import {UploadComponent} from "@app/pages/gallery/upload/upload.component";

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
    children: [
      {
        path: 'upload',
        canActivate: [AuthGuard],
        component: UploadComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {
}
