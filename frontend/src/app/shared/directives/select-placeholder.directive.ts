import { AfterContentInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'select.form-field__control',
})
export class SelectPlaceholderDirective implements AfterContentInit {

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngAfterContentInit() {
    this.switchClass(this.el.nativeElement.value);
  }

  switchClass(value: string) {
    let switchClass: (el: any, name: string) => void = value === '0: null'
      ? this.renderer.addClass
      : this.renderer.removeClass;
    switchClass(this.el.nativeElement, 'form-field__control--placeholder');
  }

  @HostListener('change', [ '$event' ])
  inputChanged(event) {
    this.switchClass(event.target.value);
  }
}
