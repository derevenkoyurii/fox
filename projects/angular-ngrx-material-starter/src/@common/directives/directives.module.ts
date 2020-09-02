import { NgModule } from '@angular/core';
//
import { CommonIfOnDomDirective } from './if-on-dom/if-on-dom.directive';
import { CommonInnerScrollDirective } from './inner-scroll/inner-scroll.directive';
import { CommonResizableDirective } from './resizable/resizable.directive';
import { ResizeObserverDirective } from './resize-observer/resize-observer.directive';
import {
  CommonMatSidenavHelperDirective,
  CommonMatSidenavTogglerDirective
} from './mat-sidenav/mat-sidenav.directive';

const DIRECTIVES = [
  CommonIfOnDomDirective,
  CommonInnerScrollDirective,
  CommonMatSidenavHelperDirective,
  CommonMatSidenavTogglerDirective,
  CommonResizableDirective,
  ResizeObserverDirective
];

@NgModule({
  imports: [],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES]
})
export class CommonDirectivesModule {}
