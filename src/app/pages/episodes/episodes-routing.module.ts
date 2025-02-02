import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { EpisodesComponent } from './episodes.component'

const routes: Routes = [{ path: '', component: EpisodesComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
