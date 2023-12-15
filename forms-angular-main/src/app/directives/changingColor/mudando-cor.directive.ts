import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Caso eu queira transformar a diretiva em uma classe CSS

/*
@Directive({
    selector: '.mudandoCor',
})

<p class=”paragrafo mudandoCor”>Texto exemplo</p>
*/

@Directive({
  selector: '[mudandoCor]'
})
export class MudandoCorDirective {

  constructor(
    private eleRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseover') onMouseOver() {
    this.changeColor('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('var(--laranja)');
  }

  private changeColor(color: string) {
    this.renderer.setStyle(this.eleRef.nativeElement, 'color', color);
    this.renderer.setStyle(this.eleRef.nativeElement, 'transition', 'color 1s ease');
  }

}
