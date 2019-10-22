import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {MainModule} from 'my-app/src/app/app.module';
import { MessageComponent} from 'my-app/src/app/message.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
   // MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
