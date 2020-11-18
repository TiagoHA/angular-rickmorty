import { NgModule } from '@angular/core'
import { CharactersRoutingModule } from './characters-routing.module'
import { CharactersComponent } from './characters.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { CardComponent } from './components/card/card.component'

import { MatCardModule } from '@angular/material/card'

@NgModule({
  imports: [SharedModule, CharactersRoutingModule, MatCardModule],
  declarations: [CharactersComponent, CardComponent],
})
export class CharactersModule {}
