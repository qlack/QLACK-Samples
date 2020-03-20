import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {QngPubsubModule} from '@qlack/qng-pubsub';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ImagePreloadDirective} from "./image-preload.directive";

@NgModule({
  declarations: [
    AppComponent,
    ImagePreloadDirective
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    QngPubsubModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [{provide: Window, useValue: window}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
