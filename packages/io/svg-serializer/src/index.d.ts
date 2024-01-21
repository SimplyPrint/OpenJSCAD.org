export interface SerializerOptions {
  unit?: 'mm' | 'em' | 'ex' | 'px' | 'in' | 'cm' | 'pt' | 'pc';
  decimals?: number = 10000;
  version?: string;
  statusCallback?: any;
}

export const mimeType: string = 'image/svg+xml';
export function serialize(options: SerializerOptions, ...objects: any[]): Array;