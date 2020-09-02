// outer
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
//
import localeUa from '@angular/common/locales/uk';
import localeEn from '@angular/common/locales/en';
//
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// inner
import {
  SharedOtherModule,
  SharedMaterialModule,
  ProgressBarModule,
  SidebarModule,
  //
  LocalStorageService
} from '@common';
//
import {CoreModule} from 'app/core';
import {LayoutModule} from 'app/layout';
//
import {AppRouting} from 'app/app.routing';
import {AppComponent} from 'app/app.component';
// end

@NgModule({
  imports: [
    //
    BrowserAnimationsModule,
    BrowserModule,
    //
    AppRouting,
    //
    CoreModule,
    LayoutModule,
    //
    SharedMaterialModule,
    SharedOtherModule,
    SidebarModule,
    ProgressBarModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      deps: [LocalStorageService],
      useFactory: () => 'en'
    }
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeUa, 'uk');
    registerLocaleData(localeEn, 'en');
  }
}
