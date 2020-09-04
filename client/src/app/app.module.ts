import { NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {FlexLayoutModule} from '@angular/flex-layout';

import 'hammerjs';
import {
  MaterialModule,
  ProgressBarModule,
  SidebarModule,
  ThemeOptionsModule
} from 'src/common';

import {CoreModule} from 'src/app/core';
import {LayoutModule} from 'src/app/layout';

import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    FlexLayoutModule,

    ThemeOptionsModule,
    CoreModule,
    LayoutModule,
    AppRouting,
    MaterialModule,
    SidebarModule,
    ProgressBarModule
  ],
  providers: [],
  declarations: [
    AppComponent,

    RegisterComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
