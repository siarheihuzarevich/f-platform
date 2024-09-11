import { Injectable } from '@angular/core';
import { ILocalStorage } from './i-local-storage';

@Injectable({ providedIn: 'root' })
export class ServerLocalStorageService implements ILocalStorage {

  private storage: { [ key: string ]: string } = {};

  setItem(key: string, value: string): void {
    this.storage[ key ] = value;
  }

  getItem(key: string): string | null {
    return this.storage[ key ] || null;
  }

  removeItem(key: string): void {
    delete this.storage[ key ];
  }

  clear(): void {
    this.storage = {};
  }
}
