import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/common/material.module';
import { ProgressBarComponent } from './progress-bar.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [ProgressBarComponent],
  exports: [ProgressBarComponent]
})
export class ProgressBarModule {}
