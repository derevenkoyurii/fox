// outer
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// inner
import { AppsRouting } from './apps.routing';
// end

@NgModule({
  imports: [CommonModule, AppsRouting]
})
export class AppsModule {}
