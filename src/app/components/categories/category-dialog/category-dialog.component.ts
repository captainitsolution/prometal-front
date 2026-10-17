import { ChangeDetectionStrategy, Component, effect, ElementRef, input, output, viewChild } from '@angular/core';
import { ProductCategory } from '../../../models/product-category.model';
import { IconComponent } from '../../../shared/icon/icon.component';
import { buildCategoryWhatsappMessage, buildWhatsappUrl } from '../../../utils/whatsapp';

/** Diálogo modal com exemplos de uma categoria (usa o `<dialog>` nativo: foco, Esc e acessibilidade já inclusos). */
@Component({
  selector: 'app-category-dialog',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './category-dialog.component.html',
  styleUrl: './category-dialog.component.scss',
})
export class CategoryDialogComponent {
  readonly category = input<ProductCategory | null>(null);
  readonly closed = output<void>();

  private readonly dialogRef = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  constructor() {
    effect(() => {
      const dialog = this.dialogRef().nativeElement;
      if (this.category() && !dialog.open) {
        dialog.showModal();
      }
    });
  }

  protected whatsappUrlFor(category: ProductCategory): string {
    return buildWhatsappUrl(buildCategoryWhatsappMessage(category.name));
  }

  protected close(): void {
    this.dialogRef().nativeElement.close();
  }

  protected onDialogClosed(): void {
    this.closed.emit();
  }

  /** Fecha ao clicar no fundo escurecido (o clique cai no próprio `<dialog>`). */
  protected onDialogClick(event: MouseEvent): void {
    if (event.target === this.dialogRef().nativeElement) {
      this.close();
    }
  }
}
