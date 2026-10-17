import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PRODUCT_CATEGORIES } from '../../data/product-categories';
import { CategoriesComponent } from './categories.component';

describe('CategoriesComponent', () => {
  let fixture: ComponentFixture<CategoriesComponent>;
  let element: HTMLElement;

  const dialog = (): HTMLDialogElement => element.querySelector('dialog')!;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('exibe um cartão para cada categoria', () => {
    expect(element.querySelectorAll('.categories__card').length).toBe(PRODUCT_CATEGORIES.length);
  });

  it('abre o diálogo com os exemplos da categoria clicada', () => {
    element.querySelector<HTMLButtonElement>('.categories__card')!.click();
    fixture.detectChanges();

    expect(dialog().open).toBeTrue();
    expect(dialog().querySelector('h3')?.textContent).toContain(PRODUCT_CATEGORIES[0].name);
  });

  it('monta o link do WhatsApp com a mensagem da categoria', () => {
    element.querySelector<HTMLButtonElement>('.categories__card')!.click();
    fixture.detectChanges();

    const href = dialog().querySelector<HTMLAnchorElement>('.dialog__cta')!.href;
    expect(decodeURIComponent(href)).toContain(PRODUCT_CATEGORIES[0].name);
  });

  it('fecha o diálogo e limpa a categoria selecionada', async () => {
    element.querySelector<HTMLButtonElement>('.categories__card')!.click();
    fixture.detectChanges();

    // O evento `close` do <dialog> é disparado de forma assíncrona pelo navegador.
    const dialogClosed = new Promise((resolve) => dialog().addEventListener('close', resolve, { once: true }));
    dialog().querySelector<HTMLButtonElement>('.dialog__close')!.click();
    await dialogClosed;
    fixture.detectChanges();

    expect(dialog().open).toBeFalse();
    expect(dialog().querySelector('h3')).toBeNull();
  });
});
