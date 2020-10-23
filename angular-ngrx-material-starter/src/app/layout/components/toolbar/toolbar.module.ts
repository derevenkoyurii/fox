import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SearchBarModule, MaterialModule } from 'src/common';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    FlexLayoutModule,
    MaterialModule,
    SearchBarModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule {}
