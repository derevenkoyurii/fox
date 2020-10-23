import { NgModule, Optional, SkipSelf } from '@angular/core';
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy
} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';

import {
  routerReducer,
  StoreRouterConnectingModule,
  RouterState
} from '@ngrx/router-store';

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';
import 'hammerjs';

import {
  LocalStorageService,
  NotificationService,
  PrevRouteService,
  MaterialModule
} from 'src/common';

import { environment } from '../../environments/environment';

import {
  RootStoreState,
  debug,
  initStateFromLocalStorage,
  navigationReducer,
  layoutReducer,
  LayoutEffects,
  NavigationEffects
} from './root-store';

const reducers: ActionReducerMap<RootStoreState> = {
  layout: layoutReducer,
  navigation: navigationReducer,
  router: routerReducer
};

const metaReducers: MetaReducer<RootStoreState>[] = [initStateFromLocalStorage];
if (!environment.production) {
  metaReducers.unshift(debug);
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

    StoreModule.forRoot(reducers, { metaReducers }),

    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: 'Angular Template',
          maxAge: 25
        }),

    MaterialModule,
    EffectsModule.forRoot([LayoutEffects, NavigationEffects]),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),

    PerfectScrollbarModule,

    LoggerModule.forRoot({
      level: !environment.production ? NgxLoggerLevel.LOG : NgxLoggerLevel.OFF,
      serverLogLevel: NgxLoggerLevel.OFF
    })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },

    LocalStorageService,
    NotificationService,
    PrevRouteService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: []
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
