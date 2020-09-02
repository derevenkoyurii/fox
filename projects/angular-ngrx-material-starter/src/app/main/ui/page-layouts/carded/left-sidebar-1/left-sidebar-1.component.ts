// outer
import { Component } from '@angular/core';
// inner
import { CommonSidebarService } from '@common';
// end

@Component({
  selector: 'anms-carded-left-sidebar-1',
  templateUrl: './left-sidebar-1.component.html',
  styleUrls: ['./left-sidebar-1.component.scss']
})
export class CardedLeftSidebar1Component {
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
