import { ContactChannel } from '../models/contact-channel.model';
import { buildWhatsappUrl } from '../utils/whatsapp';
import { SITE } from './site.config';

const optionalEmail: readonly ContactChannel[] = SITE.email
  ? [{ id: 'email', label: 'E-mail', value: SITE.email, href: `mailto:${SITE.email}`, icon: 'mail', external: false }]
  : [];

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: SITE.phone.display,
    href: buildWhatsappUrl(),
    icon: 'whatsapp',
    external: true,
  },
  {
    id: 'telefone',
    label: 'Ligar',
    value: SITE.phone.display,
    href: `tel:+${SITE.phone.digits}`,
    icon: 'phone',
    external: false,
  },
  ...optionalEmail,
  {
    id: 'instagram',
    label: 'Instagram',
    value: SITE.instagram.handle,
    href: SITE.instagram.url,
    icon: 'instagram',
    external: true,
  },
];
