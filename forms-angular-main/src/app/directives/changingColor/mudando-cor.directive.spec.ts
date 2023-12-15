import { MudandoCorDirective } from './mudando-cor.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('MudandoCorDirective', () => {
  it('should create an instance', () => {
    // Crie instâncias mock para ElementRef e Renderer2
    const mockElementRef = {} as ElementRef;
    const mockRenderer = {} as Renderer2;

    // Crie uma instância da diretiva com os mocks fornecidos
    const directive = new MudandoCorDirective(mockElementRef, mockRenderer);

    // Verifique se a instância foi criada com sucesso
    expect(directive).toBeTruthy();
  });
});
