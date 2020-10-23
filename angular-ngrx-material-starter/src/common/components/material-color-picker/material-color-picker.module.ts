import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from 'src/common/material.module';
import { MaterialColorPickerComponent } from './material-color-picker.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    MaterialModule,
    PerfectScrollbarModule
  ],
  declarations: [MaterialColorPickerComponent],
  exports: [MaterialColorPickerComponent]
})
export class MaterialColorPickerModule {}
