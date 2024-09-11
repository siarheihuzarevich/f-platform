import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EOperationSystem } from './e-operation-system';

let hasV8BreakIterator: boolean;

try {
  hasV8BreakIterator = typeof Intl !== 'undefined' && (Intl as any).v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}

@Injectable({ providedIn: 'root' })
export class PlatformService {

  public isBrowser: boolean = false;

  public EDGE: boolean = this.isBrowser && /(edge)/i.test(navigator.userAgent);

  public TRIDENT: boolean = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);

  public BLINK: boolean =
    this.isBrowser &&
    !!((window as any).chrome || hasV8BreakIterator) &&
    typeof CSS !== 'undefined' &&
    !this.EDGE &&
    !this.TRIDENT;

  public WEBKIT: boolean =
    this.isBrowser &&
    /AppleWebKit/i.test(navigator.userAgent) &&
    !this.BLINK &&
    !this.EDGE &&
    !this.TRIDENT;

  public IOS: boolean =
    this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);

  public FIREFOX: boolean = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);

  public ANDROID: boolean = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;

  public SAFARI: boolean = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;

  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object
  ) {
    this.isBrowser = this._platformId
      ? isPlatformBrowser(this._platformId)
      : typeof document === 'object' && !!document
  }

  public getOS(): EOperationSystem | undefined {

    let userAgent = navigator.userAgent.toLowerCase(),
      macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i,
      windowsPlatforms = /(win32|win64|windows|wince)/i;

    let result: EOperationSystem | undefined;

    if (macosPlatforms.test(userAgent)) {
      result = EOperationSystem.MAC_OS;
    } else if (this.IOS) {
      result = EOperationSystem.IOS;
    } else if (windowsPlatforms.test(userAgent)) {
      result = EOperationSystem.WINDOWS;
    } else if (this.ANDROID) {
      result = EOperationSystem.ANDROID;
    } else if (!result && /linux/.test(userAgent)) {
      result = EOperationSystem.LINUX;
    }

    return result;
  }
}
