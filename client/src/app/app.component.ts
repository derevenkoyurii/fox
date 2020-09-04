import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CommonSidebarService, CommonSplashScreenService } from 'src/common';
import {
  RootStoreState,
  AuthenticationService,
  layoutSelectors
} from 'src/app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  themes: string[] = [
    'theme-teal-light',
    'theme-blue-light',
    'theme-yellow-light',

    'theme-blue-gray-dark',
    'theme-pink-dark'
  ];
  activeTheme = this.themes[3];

  constructor(
    private _store: Store<RootStoreState>,
    private _splashScreenService: CommonSplashScreenService,
    private _platform: Platform,
    public auth: AuthenticationService,
    private _sidebarService: CommonSidebarService
  ) {}

  ngOnInit(): void {
    this.setThemeClass(this.activeTheme);
    this.addIsMobileClass();
  }

  addIsMobileClass(): void {
    if (this._platform.ANDROID || this._platform.IOS) {
      document.body.classList.add('is-mobile');
    }
  }

  setThemeClass(themeClassName: string): void {
    for (let i = 0; i < document.body.classList.length; i++) {
      const cn = document.body.classList[i];

      if (cn.startsWith('theme-')) {
        document.body.classList.remove(cn);
      }
    }
    document.body.classList.add(themeClassName);
  }

  toggleSidebarOpen(key): void {
    this._sidebarService.getSidebar(key).toggleOpen();
  }

  onThemeChanged(theme): void {
    this.setThemeClass(theme);
  }
}
