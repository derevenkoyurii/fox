import { Injectable } from '@angular/core';

import { NGXLogger } from 'ngx-logger';
import { SidebarComponent } from './sidebar.component';

@Injectable({ providedIn: 'root' })
export class CommonSidebarService {
  private _registry: { [key: string]: SidebarComponent } = {};

  /**
   * Constructor
   *
   * @param  _logger
   */
  constructor(private _logger: NGXLogger) {}

  /**
   * Add the sidebar to the registry
   *
   * @param key
   * @param sidebar
   */
  register(key, sidebar): void {
    // Check if the key already being used
    if (this._registry[key]) {
      this._logger.error(
        `The sidebar with the key '${key}' already exists. Either unregister it first or use a unique key.`
      );

      return;
    }

    // Add to the registry
    this._registry[key] = sidebar;
  }

  /**
   * Remove the sidebar from the registry
   *
   * @param key
   */
  unregister(key): void {
    // Check if the sidebar exists
    if (!this._registry[key]) {
      this._logger.log(
        `The sidebar with the key '${key}' doesn't exist in the registry.`
      );
    }

    // Unregister the sidebar
    delete this._registry[key];
  }

  /**
   * Return the sidebar with the given key
   *
   * @param key
   * @returns {SidebarComponent}
   */
  getSidebar(key): SidebarComponent {
    // Check if the sidebar exists
    if (!this._registry[key]) {
      this._logger.log(
        `The sidebar with the key '${key}' doesn't exist in the registry.`
      );

      return;
    }

    // Return the sidebar
    return this._registry[key];
  }
}
