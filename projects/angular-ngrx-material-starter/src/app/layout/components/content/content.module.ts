// outer
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// inner
import { SharedOtherModule } from '@common';
//
import { ContentComponent } from './content.component';
// end

@NgModule({
  imports: [RouterModule, SharedOtherModule],
  declarations: [ContentComponent],
  exports: [ContentComponent]
})
export class ContentModule {}
