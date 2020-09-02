import { Component } from '@angular/core';

import {CommonSidebarService } from '@common';
@Component({
    selector   : 'anms-carded-right-sidebar-1',
    templateUrl: './right-sidebar-1.component.html',
    styleUrls  : ['./right-sidebar-1.component.scss']
})
export class CardedRightSidebar1Component
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
