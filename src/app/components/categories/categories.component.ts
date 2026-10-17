import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PRODUCT_CATEGORIES } from '../../data/product-categories';
import { ProductCategory } from '../../models/product-category.model';
import { IconComponent } from '../../shared/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';

@Component({
  selector: 'app-categories',
  imports: [SectionHeadingComponent, IconComponent, CategoryDialogComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  protected readonly categories = PRODUCT_CATEGORIES;
  protected readonly selectedCategory = signal<ProductCategory | null>(null);

  protected open(category: ProductCategory): void {
    this.selectedCategory.set(category);
  }

  protected close(): void {
    this.selectedCategory.set(null);
  }
}
