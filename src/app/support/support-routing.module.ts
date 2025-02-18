import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportComponent } from './support.component';
import { SearchComponent } from '../search/search.component';
import { FileuploadComponent } from '../fileupload/fileupload.component';

const routes: Routes = [
  { path: '', component: SupportComponent, children: [
    { path: 'questions', component: SearchComponent },
    { path: 'file-upload', component: FileuploadComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }