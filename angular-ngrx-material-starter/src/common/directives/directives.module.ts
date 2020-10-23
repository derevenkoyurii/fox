import { NgModule } from '@angular/core';

import { IfOnDomDirective } from './if-on-dom/if-on-dom.directive';
import { InnerScrollDirective } from './inner-scroll/inner-scroll.directive';

const DIRECTIVES = [IfOnDomDirective, InnerScrollDirective];

@NgModule({
  imports: [],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES]
})
export class DirectivesModule {}
