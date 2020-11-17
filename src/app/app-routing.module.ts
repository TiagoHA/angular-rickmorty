import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: 'episodes',
    loadChildren: () =>
      import('./pages/episodes/episodes.module').then((m) => m.EpisodesModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./pages/character/character.module').then(
        (m) => m.CharacterModule
      ),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./pages/location/location.module').then((m) => m.LocationModule),
  },
  { path: '**', redirectTo: '/episodes', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
