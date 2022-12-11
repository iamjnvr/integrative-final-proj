import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from 'src/app/components/gallery/gallery.component';

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule],
  exports: [GalleryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GalleryModule {}
