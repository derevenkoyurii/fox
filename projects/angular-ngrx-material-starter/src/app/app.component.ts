// outer
import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import {Platform} from '@angular/cdk/platform';
// rxjs
import {Observable} from 'rxjs';
// ngrx
import {Store} from '@ngrx/store';
// inner
import {CommonSplashScreenService} from '@common';
import {RootStoreState, layoutSelectors} from 'app/core';
// end

@Component({
  selector: 'anms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  //
  themes: string[] = [
    //
    'theme-teal-light',
    'theme-blue-light',
    'theme-yellow-light',
    //
    'theme-blue-gray-dark',
    'theme-pink-dark',
  ];
  themeClass = this.themes[1];
  //
  layoutStyle$: Observable<string> = this._store.select(layoutSelectors.getLayoutStyle);

  /**
   * Constructor
   *
   * @param  _store
   * @param  _splashScreenService
   * @param  _platform
   *
   */
  constructor(
    private _store: Store<RootStoreState>,
    private _splashScreenService: CommonSplashScreenService,
    private _platform: Platform,
  ) {
  }

  /**
   * On init
   */
  ngOnInit(): void {
    // add theme class name
    this.addThemeClass(this.themeClass);
    // add mobile class if is mobile device
    this.addIsMobileClass();
  }

  /**
   *
   */
  addIsMobileClass(): void {
    // Add is-mobile class to the body if the platform is mobile
    if (this._platform.ANDROID || this._platform.IOS) {
      document.body.classList.add('is-mobile');
    }
  }

  /**
   *
   */
  addThemeClass(themeClassName: string): void {
    // remove prev theme
    for (let i = 0; i < document.body.classList.length; i++) {
      const cn = document.body.classList[i];

      if (cn.endsWith('-theme')) {
        document.body.classList.remove(cn);
      }
    }

    // add new theme class
    document.body.classList.add(themeClassName);
  }
}
