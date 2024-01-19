import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FolderPage } from './folder.page';
const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'event',
    loadChildren: () => import('../event/event.module').then(m => m.EventPageModule)
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
