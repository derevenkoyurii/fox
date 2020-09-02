// outer
import { NgModule } from '@angular/core';
// inner
import { VerticalLayout1Module } from './vertical/layout-1/layout-1.module';
// end

@NgModule({
  imports: [],
  exports: [
    VerticalLayout1Module
  ]
})
export class LayoutModule {}
