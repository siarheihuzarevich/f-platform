export interface IWindowService {

  getComputedStyle(element: Element): CSSStyleDeclaration;

  innerWidth: number;

  innerHeight: number;

  pageXOffset: number;

  pageYOffset: number;

  isMediaQuery(query: string): boolean;

  requestAnimationFrame(callback: FrameRequestCallback): number;

  location: Location | { href: string, pathname: string, search: string, hash: string, origin: string };

  open(url?: string, target?: string, features?: string): void;
}
