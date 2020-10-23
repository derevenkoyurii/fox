import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CommonMatchMediaService {
  activeMediaQuery: string;
  onMediaChange: BehaviorSubject<string> = new BehaviorSubject<string>('');

  /**
   * Constructor
   *
   * @param {MediaObserver} _mediaObserver
   */
  constructor(private _mediaObserver: MediaObserver) {
    // Set the defaults
    this.activeMediaQuery = '';

    // Initialize
    this.initialize();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Initialize
   *
   * @private
   */
  private initialize(): void {
    this._mediaObserver
      .asObservable()
      .pipe(map((changes: MediaChange[]) => changes[0]))
      .subscribe((change: MediaChange) => {
        this.activeMediaQuery = change.mqAlias;
        this.onMediaChange.next(change.mqAlias);
      });
  }
}
