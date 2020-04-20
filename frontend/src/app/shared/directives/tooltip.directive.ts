import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements OnInit {
  @Input('appTooltip') tooltip: string;
  private labelEl: any;
  private parentEl: any;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.parentEl = this.el.nativeElement;
    this.labelEl = this.renderer.createElement('span');

    this.renderer.addClass(this.labelEl, 'tooltip__label');
    this.renderer.appendChild(this.labelEl, this.renderer.createText(this.tooltip));

    this.renderer.addClass(this.parentEl, 'tooltip');
    this.renderer.appendChild(this.parentEl, this.labelEl);
  }
}
