import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { SharedOtherModule } from '@common/shared-other.module';
import { SharedMaterialModule } from '@common/shared-material.module';
//
import { MaterialColorPickerComponent } from './material-color-picker.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    // Shared
    SharedOtherModule,
    SharedMaterialModule,
    PerfectScrollbarModule
  ],
  declarations: [MaterialColorPickerComponent],
  exports: [MaterialColorPickerComponent]
})
export class MaterialColorPickerModule {}
