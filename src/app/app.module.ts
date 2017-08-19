import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyC4_c2k0kIILMlHmOR2ZNVsXYxTLDQJtT4",
  authDomain: "ateco-5e8b3.firebaseapp.com",
  databaseURL: "https://ateco-5e8b3.firebaseio.com",
  projectId: "ateco-5e8b3",
  storageBucket: "ateco-5e8b3.appspot.com",
  messagingSenderId: "998019993358"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
