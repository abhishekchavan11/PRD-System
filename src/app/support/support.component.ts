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

  logout() {
    try {
      this.authService.logout().subscribe(
        response => {
          console.log('Logout successful', response);
          this.router.navigate(['/auth/login']);
        },
        error => {
          console.error('Logout failed', error);
        }
      );
    } catch (error : any) {
      console.error('Logout error:', error.message);
    }
  }
}
