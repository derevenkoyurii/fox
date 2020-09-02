// outer
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
// inner
import { NotificationService } from '@common/services';
import { commonAnimations } from '@common/scss/animations';
import { CommonUtils } from '@common/utils';
// end

@Component({
  selector: 'anms-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: commonAnimations
})
export class CardComponent implements OnInit {
  // Texts
  @Input() texts: {
    title?: string;
    badge?: string;
    empty?: string;
  } = {
    title: '',
    badge: '',
    empty: 'No data',
  };
  showHeader = true;

  // Default icons
  icons = {
    empty: 'folder_open'
  };
  isCollapsed = false;

  // Can collapse ?
  @Input() canCollapse = false;
  // Default collapse
  @Input() defaultCollapse = false;
  // Indicate when show loading spinner
  @Input() loadingIndicator = false;
  // Indicate when show empty message
  @Input() emptyIndicator = false;
  @Input() emptyIcon?: string;
  // Badge
  @Input() badge = '';
  // Loader type
  @Input() loaderType = 'spinner';

  /**
   * Constructor
   *
   * @param _notificationsService
   */
  constructor(
      private _notificationsService: NotificationService
  ) {}

  /**
   * On init
   */
  ngOnInit(): void {
    this.isCollapsed = this.defaultCollapse;
  }

  /**
   * Toggle collapse
   */
  toggleCollapse(): void {
    this.isCollapsed = !!!this.isCollapsed;
  }
}
