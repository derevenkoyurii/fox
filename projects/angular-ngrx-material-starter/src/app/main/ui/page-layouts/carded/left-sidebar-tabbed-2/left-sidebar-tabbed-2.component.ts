import { Component } from '@angular/core';

import {CommonSidebarService } from '@common';
@Component({
    selector   : 'anms-carded-left-sidebar-tabbed-2',
    templateUrl: './left-sidebar-tabbed-2.component.html',
    styleUrls  : ['./left-sidebar-tabbed-2.component.scss']
})
export class CardedLeftSidebarTabbed2Component
{
    /**
     * Constructor
     *
     * @param _sidebarService

*/
    constructor(
        private _sidebarService: CommonSidebarService
    )
    {
    }/**
     * Toggle sidebar
     *
     * @param name
     */
    toggleSidebar(name): void
    {
        this._sidebarService.getSidebar(name).toggleOpen();
    }
}
