import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ListRoutingModule } from './list-routing.module'
import { ListComponent } from './list.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { MatTableModule } from '@angular/material/table'
import { ListService } from './list.service'

@NgModule({
  imports: [SharedModule, ListRoutingModule, MatTableModule],
  declarations: [ListComponent],
  providers: [ListService],
})
export class ListModule {}
