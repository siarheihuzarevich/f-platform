export interface IWindowService {

  getComputedStyle(element: Element): CSSStyleDeclaration;

  innerWidth: number;

  innerHeight: number;

  isMediaQuery(query: string): boolean;

  requestAnimationFrame(callback: FrameRequestCallback): number;
}
