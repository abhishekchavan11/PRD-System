import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportComponent } from './support.component';
import { SearchComponent } from '../search/search.component';
import { FileuploadComponent } from '../fileupload/fileupload.component';
import { authGuard } from '../authenticate/auth.guard';
const routes: Routes = [
  { path: '', component: SupportComponent, children: [
    { path: 'questions', component: SearchComponent, canActivate: [authGuard] },
    { path: 'file-upload', component: FileuploadComponent, canActivate: [authGuard] }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }