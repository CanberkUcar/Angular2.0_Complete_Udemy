import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

/* ------- Imported Component ------- */
import { ServerTestComponent } from './server-test/server-test.component';
import { ServerElementComponent } from './server-element/server-element.component';

/**
 * * 4 Main Object Properities.
 * * Bootstrap: Which component should recognize in the index.html file.
 * * Imports: Adding modules to outsource functionality.
 * ! Angular will not scan your files.
 * Adding declarations -> ServerTestComponents with TypeScript.
 */

@NgModule({
  declarations: [AppComponent, ServerTestComponent, ServerElementComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
