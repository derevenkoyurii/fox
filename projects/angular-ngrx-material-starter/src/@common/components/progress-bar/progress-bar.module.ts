import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// ==
import { SharedMaterialModule } from '@common/shared-material.module';
import { ProgressBarComponent } from './progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // Shared
    SharedMaterialModule
  ],
  declarations: [ProgressBarComponent],
  exports: [ProgressBarComponent]
})
export class ProgressBarModule {}
