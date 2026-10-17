import { SITE } from '../data/site.config';
import { buildCategoryWhatsappMessage, buildWhatsappUrl, QUOTE_MESSAGE } from './whatsapp';

describe('whatsapp utils', () => {
  it('usa o número da loja com código do país', () => {
    expect(buildWhatsappUrl()).toContain(`https://wa.me/${SITE.phone.digits}`);
    expect(SITE.phone.digits.startsWith('55')).toBeTrue();
  });

  it('usa a mensagem de orçamento por padrão', () => {
    expect(buildWhatsappUrl()).toBe(`https://wa.me/${SITE.phone.digits}?text=${encodeURIComponent(QUOTE_MESSAGE)}`);
  });

  it('codifica a mensagem na URL', () => {
    const url = buildWhatsappUrl('Olá, tudo bem?');

    expect(url).toBe(`https://wa.me/${SITE.phone.digits}?text=${encodeURIComponent('Olá, tudo bem?')}`);
  });

  it('cita a categoria na mensagem inicial', () => {
    expect(buildCategoryWhatsappMessage('Soldagem')).toContain('Soldagem');
  });
});
