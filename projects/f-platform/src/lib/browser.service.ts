import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { F_WINDOW, IWindowService } from './window';
import { F_LOCAL_STORAGE, ILocalStorage } from './local-storage';

@Injectable({ providedIn: 'root' })
export class BrowserService {

  constructor(
    @Inject(DOCUMENT) private injectedDocument: Document,
    @Inject(F_WINDOW) private windowService: IWindowService,
    @Inject(F_LOCAL_STORAGE) private localStorageService: ILocalStorage
  ) {
  }

  public get window(): IWindowService {
    return this.windowService;
  }

  public get localStorage(): ILocalStorage {
    return this.localStorageService;
  }

  public get document(): Document {
    return this.injectedDocument;
  }

  public toPixels(value: string, clientWidth: number, clientHeight: number, fontSize: string): number {
    if (value.endsWith('px')) {
      return parseFloat(value);
    } else if (value.endsWith('%')) {
      const percentage = parseFloat(value) / 100;
      return Math.max(clientWidth, clientHeight) * percentage;
    } else if (value.endsWith('em')) {
      return parseFloat(value) * parseFloat(fontSize);
    } else if (value.endsWith('rem')) {
      return parseFloat(value) * parseFloat(getComputedStyle(this.document.documentElement).fontSize);
    } else if (value.endsWith('vh')) {
      const vh = this.window.innerHeight / 100;
      return parseFloat(value) * vh;
    } else if (value.endsWith('vw')) {
      const vw = this.window.innerWidth / 100;
      return parseFloat(value) * vw;
    }
    return parseFloat(value) || 0;
  }
}
