import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { EpisodesRoutingModule } from './episodes-routing.module'
import { EpisodesComponent } from './episodes.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { EpisodesService } from './episodes.service'
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'

import { MatButtonModule } from '@angular/material/button'

@NgModule({
  imports: [
    SharedModule,
    EpisodesRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [EpisodesComponent],
  providers: [EpisodesService],
})
export class EpisodesModule {}
