// outer
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy
} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
// ngrx
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ActionReducerMap, MetaReducer, StoreModule} from '@ngrx/store';
// rxjs
import {
  routerReducer,
  StoreRouterConnectingModule,
  RouterState
} from '@ngrx/router-store';
//
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';
// inner
import {
  LocalStorageService,
  NotificationService,
  PrevRouteService,
  SharedMaterialModule
} from '@common';
//
import {environment} from '../../environments/environment';
//
import {
  RootStoreState,
  debug,
  initStateFromLocalStorage,
  navigationReducer,
  layoutReducer,
  //
  LayoutEffects,
  NavigationEffects,
} from './root-store';
// end

//
const reducers: ActionReducerMap<RootStoreState> = {
  layout: layoutReducer,
  navigation: navigationReducer,
  router: routerReducer
};

//
const metaReducers: MetaReducer<RootStoreState>[] = [initStateFromLocalStorage];
if (!environment.production) {
  metaReducers.unshift(debug);
}

//
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {suppressScrollX: true};

@NgModule({
  declarations: [],
  imports: [
    // angular
    CommonModule,
    HttpClientModule,
    // store
    StoreModule.forRoot(reducers, {metaReducers}),
    //
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
        name: 'Angular Template',
        // Retains last 25 states
        maxAge: 25
      }),
    //
    SharedMaterialModule,
    // effects
    EffectsModule.forRoot([
      LayoutEffects,
      NavigationEffects
    ]),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),
    //
    PerfectScrollbarModule,
    //
    LoggerModule.forRoot({
      level: !environment.production ? NgxLoggerLevel.LOG : NgxLoggerLevel.OFF,
      serverLogLevel: NgxLoggerLevel.OFF
    })
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    // Guards
    // services
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
