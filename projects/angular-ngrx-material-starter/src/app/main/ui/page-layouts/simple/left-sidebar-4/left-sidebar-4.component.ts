import { Component } from '@angular/core';

import {CommonSidebarService } from '@common';
@Component({
    selector   : 'anms-simple-left-sidebar-4',
    templateUrl: './left-sidebar-4.component.html',
    styleUrls  : ['./left-sidebar-4.component.scss']
})
export class SimpleLeftSidebar4Component
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
