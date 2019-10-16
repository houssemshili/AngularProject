import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AlertComponent } from './alert/alert.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsComponent } from './contacts/contacts.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AlertComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
