import { Component } from '@angular/core';

import {CommonSidebarService } from 'src/common';
@Component({
    selector   : 'app-simple-right-sidebar-1',
    templateUrl: './right-sidebar-1.component.html',
    styleUrls  : ['./right-sidebar-1.component.scss']
})
export class SimpleRightSidebar1Component
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
