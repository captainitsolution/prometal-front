import { SITE } from '../data/site.config';

const WHATSAPP_BASE_URL = 'https://wa.me';

export const QUOTE_MESSAGE = 'Olá! Gostaria de pedir um orçamento.';

/** Monta o link do WhatsApp da loja, com mensagem inicial. */
export function buildWhatsappUrl(message: string = QUOTE_MESSAGE): string {
  return `${WHATSAPP_BASE_URL}/${SITE.phone.digits}?text=${encodeURIComponent(message)}`;
}

export function buildCategoryWhatsappMessage(categoryName: string): string {
  return `Olá! Gostaria de um orçamento de ${categoryName}.`;
}
