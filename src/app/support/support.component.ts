import { Component, ViewChild  } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  @ViewChild('drawer')
  drawer!: MatDrawer;

  toggleDrawer() {
    this.drawer.toggle();
  }

}
