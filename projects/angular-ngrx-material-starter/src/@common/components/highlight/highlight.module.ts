// outer
import { NgModule } from '@angular/core';
// inner
import { HighlightComponent } from './highlight.component';
// end

@NgModule({
  declarations: [
    HighlightComponent
  ],
  exports: [
    HighlightComponent
  ]
})
export class HighlightModule {
}
