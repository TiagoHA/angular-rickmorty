import { NgModule } from '@angular/core'
import { CharactersRoutingModule } from './characters-routing.module'
import { CharactersComponent } from './characters.component'
import { SharedModule } from 'src/app/shared/shared.module'

import { CharacterCardComponent } from './components/character-card/character-card.component'

@NgModule({
  imports: [SharedModule, CharactersRoutingModule],
  declarations: [CharactersComponent, CharacterCardComponent],
})
export class CharactersModule {}
