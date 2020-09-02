// outer imports
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// imports end

@Component({
  selector: 'anms-common-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmDialogComponent {

  confirmMessage: string;

  /**
   * Constructor
   *
   * @param {MatDialogRef<ConfirmDialogComponent>} dialogRef
   * @param data
   */
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    if (data) {
      this.confirmMessage = data.confirmMessage;
    }
  }
}
