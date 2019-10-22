import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {MainModule} from 'my-app/src/app/app.module';
import { MainModule} from 'my-app';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    MainModule
   // MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
