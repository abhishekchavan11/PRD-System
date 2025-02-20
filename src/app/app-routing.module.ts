import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './authenticate/auth.guard';
const routes: Routes = [
  { path : '' , redirectTo : 'home', pathMatch : 'full'},
  { path: 'home', loadChildren: () => import('./support/support.module').then(m => m.SupportModule), canActivate: [authGuard] },
  { path: 'auth' , loadChildren: () => import('./authenticate/authenticate.module').then(m => m.AuthenticateModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
