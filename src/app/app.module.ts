import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TablePipe } from './table.pipe';
//import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    TablePipe,
   // CharacterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
