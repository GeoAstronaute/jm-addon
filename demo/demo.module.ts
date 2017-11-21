import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JmAddonModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, JmAddonModule],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
