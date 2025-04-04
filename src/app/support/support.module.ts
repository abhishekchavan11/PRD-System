import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';

import { SearchComponent } from '../search/search.component';
import { FileuploadComponent } from '../fileupload/fileupload.component';
import { SupportRoutingModule } from './support-routing.module';

@NgModule({
  declarations: [
    SupportComponent,
    SearchComponent,
    FileuploadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SupportRoutingModule,
    ReactiveFormsModule,MatMenuModule,
    MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatIconModule, MatListModule,
    MatInputModule,MatTooltipModule, MatToolbarModule,MatCardModule,MatProgressSpinnerModule, MatSnackBarModule
  ]
})
export class SupportModule { }
