// outer
import { NgModule } from '@angular/core';
// inner
import { StaticRouting } from './static.routing';
// end

@NgModule({
  imports: [StaticRouting],
  exports: []
})
export class StaticModule {}
