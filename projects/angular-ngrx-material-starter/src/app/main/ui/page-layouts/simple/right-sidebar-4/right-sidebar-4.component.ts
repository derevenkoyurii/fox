import { Component } from '@angular/core';
import { CommonSidebarService } from '@common';

@Component({
  selector: 'anms-simple-right-sidebar-4',
  templateUrl: './right-sidebar-4.component.html',
  styleUrls: ['./right-sidebar-4.component.scss']
})
export class SimpleRightSidebar4Component {
  /**
   * Constructor
   *
   * @param _sidebarService

   */
  constructor(
    private _sidebarService: CommonSidebarService
  ) {
  }

  /**
   * Toggle sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._sidebarService.getSidebar(name).toggleOpen();
  }
}
