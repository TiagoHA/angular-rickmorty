import { Component, Input, OnInit } from '@angular/core'
import { ICharacter } from '../../models/characters.interface'

@Component({
  selector: 'spa-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  @Input('character') char: ICharacter

  public status = ''

  constructor() {}

  ngOnInit() {
    this.dynamicStatus()
  }

  dynamicStatus() {
    const { status } = this.char
    if (status === 'Alive') {
      this.status = ' character-card__status-icon--alive'
    } else if (status === 'Dead') {
      this.status = ' character-card__status-icon--alive'
    }
  }
}
