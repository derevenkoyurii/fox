// outer
import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {
  animate,
  AnimationPlayer,
  style,
  //
  AnimationBuilder,
} from '@angular/animations';
// rxjs
import {filter, take} from 'rxjs/operators';
// end

@Injectable({providedIn: 'root'})
export class CommonSplashScreenService {
  splashScreenEl: any;
  player: AnimationPlayer;

  /**
   * Constructor
   *
   * @param _animationBuilder
   * @param  _router
   *
   */
  constructor(
    private _animationBuilder: AnimationBuilder,
    private _router: Router
  ) {
    // Initialize
    this._init();
  }

  /**
   *
   */
  private _init(): void {
    // Get the splash screen element
    this.splashScreenEl = document.body.querySelector('#anms-splash-screen');

    // If the splash screen element exists...
    if (this.splashScreenEl) {
      // Hide it on the first NavigationEnd event
      this._router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          take(1)
        )
        .subscribe(() => {
          setTimeout(() => {
            this.hide();
          });
        });
    }
  }

  /**
   *
   */
  show(): void {
    this.player = this._animationBuilder
      .build([
        style({opacity: '0', zIndex: '99999'}),
        animate('400ms ease', style({opacity: '1'}))
      ])
      .create(this.splashScreenEl);

    setTimeout(() => {
      this.player.play();
    }, 0);
  }

  /**
   * Hide the splash screen
   */
  hide(): void {
    this.player = this._animationBuilder
      .build([
        style({opacity: '1'}),
        animate(
          '400ms ease',
          style({
            opacity: '0',
            zIndex: '-10'
          })
        )
      ])
      .create(this.splashScreenEl);

    setTimeout(() => {
      this.player.play();
    }, 0);
  }
}
