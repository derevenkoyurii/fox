import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/common/material.module';

import { ConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
  imports: [MaterialModule],
  declarations: [ConfirmDialogComponent]
})
export class ConfirmDialogModule {}
