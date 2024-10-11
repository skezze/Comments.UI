export interface Attachment {
    type: 'image' | 'text';
    fileName: string;
    fileSizeKB: number;
    dimensions?: { width: number; height: number };
}