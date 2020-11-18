import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { IInfo } from 'src/app/shared/models/info.interface'
import { CharactersService } from './characters.service'
import { ICharacter } from './models/characters.interface'

@Component({
  selector: 'spa-character',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  private subs?: Subscription
  public characters?: ICharacter[] = []
  public info?: IInfo

  constructor(private readonly charactersService: CharactersService) {}

  ngOnInit() {
    console.log('TCL: CharactersModule -> ngOnInit -> ngOnInit')
    this.getCharacters()
  }

  ngOnDestroy() {
    this.subs?.unsubscribe()
  }

  onPageFired(ev) {
    if ((ev.pageIndex + 1) * ev.pageSize === ev.length) {
      this.getCharacters({ next: true })
    }
  }

  getCharacters({ next = false } = {}) {
    this.subs = this.charactersService
      .getCharacters({ next })
      .subscribe(({ info, results }) => {
        console.log('TCL: CharactersModule -> getLocations -> results', results)
        this.characters = [...this.characters, ...results]
        this.info = info
      })
  }
}
