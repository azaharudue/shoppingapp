import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding ('style.backgroundColor') backgroundColor: string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2 ) { }
    ngOnInit(): void{
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }
  @HostListener('mouseenter')mouseover(eventData: Event): void{
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseleave')mouseleave(eventData: Event): void{
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
  @HostListener('click') mouseclick(eventData: Event): void{
    this.backgroundColor = 'Yellow';
  }
}
