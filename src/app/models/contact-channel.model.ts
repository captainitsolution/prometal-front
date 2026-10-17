import { IconName } from '../shared/icon/icon-name';

export interface ContactChannel {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly icon: IconName;
  readonly external: boolean;
}
