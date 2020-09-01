import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormOpenComponent } from './form-open/form-open.component';
import {WINDOW_PROVIDERS} from './services/window.service';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    FormEditComponent,
    FormOpenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexModule,
    FlexLayoutModule
  ],
  providers: [
    WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
