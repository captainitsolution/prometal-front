export interface BusinessHoursRow {
  readonly days: string;
  /** `null` indica que a loja não abre nesses dias. */
  readonly hours: string | null;
}
