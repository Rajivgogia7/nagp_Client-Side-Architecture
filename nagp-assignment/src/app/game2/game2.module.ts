import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { Game2Component } from './game2.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  exports: [Game2Component],
  declarations: [Game2Component],
  providers: [],
})
export class CustomListModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(Game2Component, {
      injector: this.injector,
    });

    customElements.define('game2-nagp', el);
  }
}
