import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageComponent } from 'src/app/components/package/package.component';
import { PackageHotelComponent } from 'src/app/components/package-hotel/package-hotel.component';

@NgModule({
  declarations: [PackageComponent, PackageHotelComponent],
  imports: [CommonModule],
  exports: [PackageComponent, PackageHotelComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PackagesModule {}
