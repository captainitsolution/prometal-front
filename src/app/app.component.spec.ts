import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('renderiza as seções principais da página', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;

    for (const id of ['inicio', 'produtos', 'como-comprar', 'horario', 'localizacao', 'contato']) {
      expect(element.querySelector(`#${id}`)).withContext(id).not.toBeNull();
    }
  });
});
