import { Component, Input } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'ngx-lightbox';

@Component({
  selector: 'app-file-preview',
  standalone: true,
  imports: [CommonModule, LightboxModule],
  templateUrl: './file-preview.component.html'
})
export class FilePreviewComponent {
  @Input() attachments: any[] = [];

  private _albums: any[] = [];

  constructor(private lightbox: Lightbox) {}

  ngOnInit() {
    // Подготовка изображений для Lightbox
    this.attachments.forEach(file => {
      if (file.type === 'image') {
        const album = {
          src: 'assets/uploads/' + file.fileName,
          thumb: 'assets/uploads/' + file.fileName,
          caption: file.fileName
        };
        this._albums.push(album);
      }
    });
  }

  open(index: number): void {
    this.lightbox.open(this._albums, index);
  }

  close(): void {
    this.lightbox.close();
  }

  isImage(file: any): boolean {
    return file.type === 'image';
  }

  isText(file: any): boolean {
    return file.type === 'text';
  }
}
