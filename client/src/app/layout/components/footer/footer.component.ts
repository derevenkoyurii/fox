import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  version = environment.versions.app;

  /**
   * Constructor
   *
   * @param _matDialog
   */
  constructor(private _matDialog: MatDialog) {}
}
