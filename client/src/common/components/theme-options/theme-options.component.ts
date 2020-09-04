import {
  Component,
  HostBinding,
  EventEmitter,
  Input,
  Output,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {commonAnimations} from 'src/common/scss/animations';
import {CommonSidebarService} from 'src/common/components/sidebar/sidebar.service';

@Component({
  selector: 'app-theme-options',
  templateUrl: './theme-options.component.html',
  styleUrls: ['./theme-options.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: commonAnimations
})
export class ThemeOptionsComponent implements OnInit, OnDestroy {
  @Input() activeTheme: string;
  @Output() themeChanged: EventEmitter<boolean> = new EventEmitter();

  @HostBinding('class.bar-closed') barClosed: boolean;

  form: FormGroup;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   */
  constructor(
    private _formBuilder: FormBuilder,
    private _sidebarService: CommonSidebarService,
    private _renderer: Renderer2
  ) {
    // Set the defaults
    this.barClosed = true;

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  /**
   * On init
   */
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      theme: new FormControl(this.activeTheme),
      layout: this._formBuilder.group({
        navigation: this._formBuilder.group({
          customBackgroundColor: new FormControl(),
          headerBackground: new FormControl(),
          barBackground: new FormControl()
        }),
        toolbar: this._formBuilder.group({
          background: new FormControl(),
          customBackgroundColor: new FormControl()
        }),
        footer: this._formBuilder.group({
          background: new FormControl(),
          customBackgroundColor: new FormControl()
        })
      })
    });

    this.form
      .get('theme')
      .valueChanges
      .pipe(
        takeUntil(this._unsubscribeAll),
      )
      .subscribe((theme) => {
        this.themeChanged.emit(theme);
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  /**
   * Toggle sidebar open
   */
  toggleSidebarOpen(key): void {
    this._sidebarService.getSidebar(key).toggleOpen();
  }
}
