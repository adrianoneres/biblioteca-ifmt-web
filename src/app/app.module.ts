import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ButtonComponent } from './button/button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TitleComponent,
    ButtonComponent,
    FormsModule,
    InputTextComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
