export interface SerializerOptions {
    binary?: boolean = true;
    statusCallback?: (progress: number) => void;
}

export const mimeType: string = 'model/stl';
export function serialize(options: SerializerOptions, ...objects: Object): Array;
