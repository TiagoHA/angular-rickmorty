import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'character',
    loadChildren: () =>
      import('./pages/character/character.module').then(
        (m) => m.CharacterModule
      ),
  },
  { path: '**', redirectTo: '/list', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
