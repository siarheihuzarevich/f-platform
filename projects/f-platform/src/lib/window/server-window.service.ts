import { Injectable } from '@angular/core';
import { IWindowService } from './i-window-service';

@Injectable({ providedIn: 'root' })
export class ServerWindowService implements IWindowService {

  public getComputedStyle(element: Element): CSSStyleDeclaration {
    // @ts-ignore
    return new Proxy({}, {
      get: () => '0'
    });
  }

  public get innerWidth(): number {
    return 0;
  }

  public get innerHeight(): number {
    return 0;
  }

  public isMediaQuery(query: string): boolean {
    return false;
  }

  requestAnimationFrame(callback: FrameRequestCallback): number {
    return setTimeout(callback, 0);
  }
}
