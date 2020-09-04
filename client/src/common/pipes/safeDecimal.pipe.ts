import { Pipe, PipeTransform } from '@angular/core';
import { isNumber, isFinite } from 'lodash';
import { DecimalPipe } from '@angular/common';

@Pipe({ name: 'safeDecimal' })
export class SafeDecimalPipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {}

  /**
   * Transform
   *
   * @param {any} value
   * @param {string} decimalInfo
   * * @param {string} localeId
   * @returns {any}
   */
  transform(value: any, decimalInfo?: string, localeId?: string): any {
    let valueToTransform;
    if (this.isNumber(value)) {
      valueToTransform = value;
    } else {
      const attemptedValue = value * 1;
      if (this.isNumber(attemptedValue)) {
        valueToTransform = attemptedValue;
      }
    }

    if (valueToTransform) {
      return this.decimalPipe.transform(value, decimalInfo, localeId);
    } else {
      return value;
    }
  }

  private isNumber(value: any): boolean {
    return isNumber(value) && isFinite(value);
  }
}
