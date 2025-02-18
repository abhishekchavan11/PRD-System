import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : '' , redirectTo : 'home', pathMatch : 'full'},
  { path: 'home', loadChildren: () => import('./support/support.module').then(m => m.SupportModule) },
  { path: 'auth' , loadChildren: () => import('./authenticate/authenticate.module').then(m => m.AuthenticateModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
