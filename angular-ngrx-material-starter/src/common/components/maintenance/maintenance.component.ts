import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { commonAnimations } from 'src/common/scss/animations';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: commonAnimations
})
export class MaintenanceComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
