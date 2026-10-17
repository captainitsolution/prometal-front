import { ProductCategory } from '../models/product-category.model';

/**
 * Categorias de demonstração, montadas a partir do Instagram e dos materiais de divulgação da loja.
 * PENDENTE: o cliente deve revisar a lista real de categorias e de exemplos.
 */
export const PRODUCT_CATEGORIES: readonly ProductCategory[] = [
  {
    id: 'abrasivos',
    name: 'Abrasivos',
    summary: 'Discos, lixas e limas rotativas.',
    icon: 'disc',
    examples: ['Discos de corte e desbaste', 'Lixas', 'Limas rotativas'],
  },
  {
    id: 'soldagem',
    name: 'Soldagem',
    summary: 'Máquinas, arame e eletrodos.',
    icon: 'bolt',
    examples: ['Inversoras de solda', 'Arame de solda MIG', 'Eletrodos'],
  },
  {
    id: 'chapas-metais',
    name: 'Chapas e metais',
    summary: 'Chapas e ferragens em geral.',
    icon: 'layers',
    examples: ['Chapas de aço', 'Ferragens', 'Perfis e barras'],
  },
  {
    id: 'vazadeiras-navalhas',
    name: 'Vazadeiras e navalhas',
    summary: 'Peças para beneficiamento de café.',
    icon: 'grid',
    examples: ['Vazadeiras em várias medidas, com ou sem aba', 'Navalhas lisas', 'Navalhas dentadas'],
  },
  {
    id: 'ferramentas',
    name: 'Ferramentas',
    summary: 'Para a oficina, a obra e o campo.',
    icon: 'wrench',
    examples: ['Brocas para fibrocimento e mourão', 'Broca escalonada', 'Foice', 'Carregador de bateria'],
  },
  {
    id: 'lubrificacao',
    name: 'Graxas e lubrificação',
    summary: 'Graxa e bomba de graxa.',
    icon: 'drop',
    examples: ['Graxa', 'Bomba de graxa'],
  },
  {
    id: 'correias-polias',
    name: 'Correias e polias',
    summary: 'Transmissão para máquinas.',
    icon: 'cog',
    examples: ['Correias', 'Polias', 'Caneca plástica'],
  },
  {
    id: 'parafusos-epis',
    name: 'Parafusos e EPIs',
    summary: 'Fixação e proteção no trabalho.',
    icon: 'shield',
    examples: ['Parafusos', 'Porcas e arruelas', 'Equipamentos de proteção individual (EPIs)'],
  },
];
