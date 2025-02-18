import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SupportModule } from './support/support.module';
import { AuthenticateModule } from './authenticate/authenticate.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SupportModule,
    AuthenticateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
