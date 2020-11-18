import { NgModule } from '@angular/core'

import { EpisodesRoutingModule } from './episodes-routing.module'
import { EpisodesComponent } from './episodes.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { EpisodesService } from './episodes.service'

@NgModule({
  imports: [SharedModule, EpisodesRoutingModule],
  declarations: [EpisodesComponent],
  providers: [EpisodesService],
})
export class EpisodesModule {}
