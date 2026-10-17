/**
 * Dados institucionais da loja.
 * Campos marcados com PENDENTE ainda não foram confirmados com o cliente e NÃO aparecem no site.
 */
export const SITE = {
  name: 'Prometal Abrasivos e Metais',
  shortName: 'Prometal',
  description:
    'Abrasivos, metais, chapas, ferramentas e EPIs em Guaraná, Aracruz - ES. Peça seu orçamento pelo WhatsApp.',
  phone: { display: '(27) 99943-3456', digits: '5527999433456' },
  /** PENDENTE: e-mail de contato (o cliente ainda não informou). */
  email: null as string | null,
  instagram: { handle: '@prometalguarana', url: 'https://www.instagram.com/prometalguarana/' },
  address: {
    street: 'Rua Gabriel Pandolf, 122',
    district: 'Guaraná',
    city: 'Aracruz',
    state: 'ES',
    zipCode: '29195-409',
  },
  coordinates: { lat: -19.6803804, lng: -40.2685539 },
  /** PENDENTE: confirmar com o cliente antes de publicar (dados vindos de consulta pública de CNPJ). */
  legal: { companyName: 'Prometal Comércio de Abrasivos e Metais Ltda', cnpj: '41.845.824/0001-40' },
  /** PENDENTE: formas de pagamento (o cliente não confirmou). Não exibir até confirmar. */
  paymentMethods: null as readonly string[] | null,
  /** A loja não faz entregas (confirmado pelo cliente). */
  delivers: false,
} as const;

export const SITE_FULL_ADDRESS = [
  SITE.address.street,
  SITE.address.district,
  `${SITE.address.city} - ${SITE.address.state}`,
  SITE.address.zipCode,
].join(', ');
