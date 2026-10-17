import { IconName } from '../shared/icon/icon-name';

export interface ProductCategory {
  readonly id: string;
  readonly name: string;
  readonly summary: string;
  readonly icon: IconName;
  /** Exemplos de itens da categoria (ilustrativos: a lista real depende do estoque da loja). */
  readonly examples: readonly string[];
}
