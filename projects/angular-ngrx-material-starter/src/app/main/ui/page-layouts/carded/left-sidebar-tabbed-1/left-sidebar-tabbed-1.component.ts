import { Component } from '@angular/core';
import { CommonSidebarService } from '@common';

@Component({
  selector: 'anms-carded-left-sidebar-tabbed-1',
  templateUrl: './left-sidebar-tabbed-1.component.html',
  styleUrls: ['./left-sidebar-tabbed-1.component.scss']
})
export class CardedLeftSidebarTabbed1Component {
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
