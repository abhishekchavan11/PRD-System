import { Component, ViewChild  } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '../authenticate/auth.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {

  constructor(
    private router : Router,
    public authService : AuthService
  ){}

  @ViewChild('drawer')
  drawer!: MatDrawer;

  toggleDrawer() {
    this.drawer.toggle();
  }

  logout(){
    console.log("----logout");
    this.authService.logout()
    this.router.navigate(['/auth/login']);
  }
}
