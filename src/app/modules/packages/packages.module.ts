import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageComponent } from 'src/app/components/package/package.component';
import { PackageHistoryComponent } from 'src/app/components/package-history/package-history.component';
import { PackageHotelComponent } from 'src/app/components/package-hotel/package-hotel.component';

@NgModule({
  declarations: [
    PackageComponent,
    PackageHistoryComponent,
    PackageHotelComponent,
  ],
  imports: [CommonModule],
  exports: [PackageComponent, PackageHistoryComponent, PackageHotelComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PackagesModule {}
