import { NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

/* ---------- Added Modules --------- */
/**
 * TODO:(Module Changes here.) Added FormsModule to
 *  bind ngModel to input, this is the way on Angular.
 * ! Dont forget to add Bootstrap (if you are using)
 * to angular.json as part of the setup too.
 * That part explained on GettingStarted 12.
 */
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
