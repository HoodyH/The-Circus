import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {environment} from "../environments/environment";


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app/pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: 'access',
    loadChildren: () => import('./pages/access/access.module').then(m => m.AccessModule),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

const config: ExtraOptions = {
  useHash: environment.useHash,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
