import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ListRoutingModule } from './list-routing.module'
import { ListComponent } from './list.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { ListService } from './list.service'
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'

import { MatButtonModule } from '@angular/material/button'

@NgModule({
  imports: [
    SharedModule,
    ListRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [ListComponent],
  providers: [ListService],
})
export class ListModule {}
