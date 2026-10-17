import { HowToBuyStep } from '../models/how-to-buy-step.model';

export const HOW_TO_BUY_STEPS: readonly HowToBuyStep[] = [
  {
    title: 'Chame no WhatsApp',
    text: 'Diga o que você precisa. Pode mandar foto, medida ou o nome da peça.',
    icon: 'whatsapp',
  },
  {
    title: 'Receba o orçamento',
    text: 'Nossa equipe confere o item e responde com preço e disponibilidade.',
    icon: 'message',
  },
  {
    title: 'Retire na loja',
    text: 'Combinado o pedido, é só passar na loja para buscar. Não fazemos entregas.',
    icon: 'map-pin',
  },
];
