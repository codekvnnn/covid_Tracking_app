// frontend/src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// Other imports...

@NgModule({
  declarations: [
    AppComponent,
    // other components...
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // other modules...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
