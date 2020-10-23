import { NgModule } from '@angular/core';

import { VerticalLayout1Module } from './vertical/layout-1/layout-1.module';
import { EmptyModule } from './empty/empty.module';

@NgModule({
  imports: [],
  exports: [VerticalLayout1Module, EmptyModule]
})
export class LayoutModule {}
