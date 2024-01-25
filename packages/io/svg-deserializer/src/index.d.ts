import type { Geom2 } from "@simplyprint/jscad-modeling/src/geometries/types";

interface Options {
  addMetaData?: boolean = true;
  filename?: string = 'svg';
  output?: 'script' | 'geometry' = 'script';
  pxPmm?: number = 1 / 0.2822222;
  segments?: number = 32;
  target?: 'geom2' | 'path2';
  version?: string = '0.0.0';
  pathSelfClosed?: 'error' | 'trim' | 'split' = 'error';
}

export const mimeType: string;

export function deserialize(options: Options & { output: 'script' }, input: string): string;
export function deserialize(options: Options & { output: 'geometry', target: 'geom2' }, input: string): Geom2[];
export function deserialize(options: Options & { output: 'geometry', target: 'path2' }, input: string): Path2[];