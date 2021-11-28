  import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { Game1Component } from './game1.component';


@NgModule({
  imports: [CommonModule, BrowserModule],
  exports: [Game1Component],
  declarations: [Game1Component],
  providers: []
})
export class CustomListModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(Game1Component, {
      injector: this.injector,
    });

    customElements.define('game1-nagp', el);
  }
}
