import { Component, Input, OnInit } from '@angular/core'
import { ICharacter } from '../../models/characters.interface'

@Component({
  selector: 'spa-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  @Input('character') char: ICharacter

  constructor() {}

  ngOnInit(): void {}
}

/*
name
status
species
last location - location.name
image
origin
*/
