// outer
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// inner
import {
  SearchBarModule,
  SharedOtherModule,
  SharedMaterialModule,
  CardModule
} from '@common';
//
import { ToolbarComponent } from './toolbar.component';
// end

@NgModule({
  imports: [
    RouterModule,
    //
    SharedMaterialModule,
    SharedOtherModule,
    //
    SearchBarModule,
    CardModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule {}
