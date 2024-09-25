import { Injectable } from '@angular/core';
import { IWindowService } from './i-window-service';

@Injectable({ providedIn: 'root' })
export class ServerWindowService implements IWindowService {

  public getComputedStyle(element: Element): CSSStyleDeclaration {
    // @ts-ignore
    return new Proxy({
      getPropertyValue: (property: string) => {
        return '0';
      }
    }, {
      get: (target, prop) => {
        if (prop === 'getPropertyValue') {
          return target.getPropertyValue;
        }
        return '0';
      }
    });
  }

  public get innerWidth(): number {
    return 0;
  }

  public get innerHeight(): number {
    return 0;
  }

  public get pageXOffset(): number {
    return 0;
  }

  public get pageYOffset(): number {
    return 0;
  }

  public isMediaQuery(query: string): boolean {
    return false;
  }

  public requestAnimationFrame(callback: FrameRequestCallback): number {
    return setTimeout(callback, 0);
  }

  public get location(): { href: string, pathname: string, search: string, hash: string, origin: string } {
    return { href: '', pathname: '', search: '', hash: '', origin: '' };
  }

  public open(url?: string, target?: string, features?: string): void {
    // Do nothing
  }
}
