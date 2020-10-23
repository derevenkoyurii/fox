import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class NotificationService {
  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly zone: NgZone
  ) {}

  default(message: string, durationMs: number = 2000): void {
    this.show(message, {
      duration: durationMs,
      panelClass: 'default-notification-overlay'
    });
  }

  info(message: string, durationMs: number = 2000): void {
    this.show(message, {
      duration: durationMs,
      panelClass: 'info-notification-overlay'
    });
  }

  success(message: string, durationMs: number = 2000): void {
    this.show(message, {
      duration: durationMs,
      panelClass: 'success-notification-overlay'
    });
  }

  warn(message: string, durationMs: number = 2500): void {
    this.show(message, {
      duration: durationMs,
      panelClass: 'warning-notification-overlay'
    });
  }

  error(message: string, durationMs: number = 3000): void {
    this.show(message, {
      duration: durationMs,
      panelClass: 'error-notification-overlay'
    });
  }

  private show(message: string, configuration: MatSnackBarConfig): void {
    // Need to open snackBar from Angular zone to prevent issues with its position per
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    this.zone.run(() => this.snackBar.open(message, null, configuration));
  }
}
