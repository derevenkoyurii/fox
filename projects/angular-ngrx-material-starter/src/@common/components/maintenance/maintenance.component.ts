import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { commonAnimations } from '@common/scss/animations';

@Component({
  selector: 'anms-maintenance',
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
