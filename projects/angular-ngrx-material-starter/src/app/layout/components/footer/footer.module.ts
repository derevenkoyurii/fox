// outer
import { NgModule } from '@angular/core';
// inner
import { SharedOtherModule, SharedMaterialModule } from '@common';
//
import { FooterComponent } from './footer.component';
// end

@NgModule({
  imports: [
    SharedOtherModule,
    SharedMaterialModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {}
