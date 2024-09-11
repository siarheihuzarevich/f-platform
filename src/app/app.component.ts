import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { BrowserService } from '@foblex/platform';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(
    private browserService: BrowserService,
    private elementReference: ElementRef<HTMLElement>,
  ) {
  }

  public ngOnInit(): void {
    console.log('AppComponent initialized');
    this.toPixels();
  }

  public ngAfterViewInit(): void {
    console.log('AppComponent view initialized');
    this.toPixels();
  }

  private toPixels(): void {
    const element = this.elementReference.nativeElement;
    const clientWidth = element.clientWidth;
    const clientHeight = element.clientHeight;
    this.browserService.window.requestAnimationFrame(() => {
      const styles = this.browserService.window.getComputedStyle(this.elementReference.nativeElement);
      console.log('ToPixels Width From PX:', this.browserService.toPixels(styles.width, clientWidth, clientHeight, styles.fontSize));
      console.log('ToPixels Margin From REM:', this.browserService.toPixels(styles.margin, clientWidth, clientHeight, styles.fontSize));
      console.log('ToPixels Padding From EM:', this.browserService.toPixels(styles.padding, clientWidth, clientHeight, styles.fontSize));
    });
  }
}
