import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MinFontSizePipe } from './min-font-size.pipe';
import {MinLetterSpacingPipe} from './min-letter-spacing';
import {PasswordDirective} from './password.directive';

@NgModule({
  declarations: [
    AppComponent,
    MinFontSizePipe,
    MinLetterSpacingPipe,
    PasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MinFontSizePipe,
    MinLetterSpacingPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
