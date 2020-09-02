import { Injectable } from '@angular/core';
import { merge } from 'lodash';

const APP_PREFIX = 'anms-';

@Injectable()
export class LocalStorageService {
  constructor() {}

  static initStateFrom(initialState): any {
    return Object.keys(localStorage).reduce((state: any, storageKey) => {
      if (storageKey.includes(APP_PREFIX)) {
        const stateKeys = storageKey
          .replace(APP_PREFIX, '')
          .toLowerCase()
          .split('.')
          .map((key) =>
            key
              .split('-')
              .map((token, index) =>
                index === 0
                  ? token
                  : token.charAt(0).toUpperCase() + token.slice(1)
              )
              .join('')
          );
        let currentStateRef = state;

        stateKeys.forEach((key, index) => {
          if (index === stateKeys.length - 1) {
            const stateFromStore = JSON.parse(localStorage.getItem(storageKey));
            const _stateFromStore = { ...stateFromStore };
            const stateFromStoreVersion =
              _stateFromStore && _stateFromStore.version;

            const _initialState = { ...initialState };
            const initialStateVersion =
              _initialState[key] && _initialState[key].version;

            const isValid =
              initialStateVersion || stateFromStoreVersion
                ? initialStateVersion === stateFromStoreVersion
                : true;

            if (isValid) {
              currentStateRef[key] = merge({}, _initialState[key], stateFromStore);
            } else {
              // clear all stores
              sessionStorage.clear();
              localStorage.clear();
              //
              currentStateRef[key] = _initialState[key];
            }

            return;
          }

          currentStateRef[key] = currentStateRef[key] || {};
          currentStateRef = currentStateRef[key];
        });
      }
      return state;
    }, {});
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
  }

  getItem(key: string): any {
    return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`));
  }

  removeItem(key: string): void {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  }
}
