import { Component, ViewChild  } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {

  constructor(
    private router : Router
  ){}

  @ViewChild('drawer')
  drawer!: MatDrawer;

  toggleDrawer() {
    this.drawer.toggle();
  }

  logout(){
    console.log("----logout");
    this.router.navigate(['/auth/login']);
  }
}
