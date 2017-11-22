import { NgModule, ModuleWithProviders, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [HelloWorldComponent],
  entryComponents: [HelloWorldComponent]
})
export class JmAddonModule {
  getViewComponent() {
    return HelloWorldComponent;
  }
}
