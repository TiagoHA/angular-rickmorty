import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { SharedModule } from 'src/app/shared/shared.module'


@NgModule({
  declarations: [LocationsComponent],
  imports: [
    SharedModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule { }
