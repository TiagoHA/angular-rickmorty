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
    this.getCharacters()
  }

  ngOnDestroy() {
    this.subs?.unsubscribe()
  }

  onScrollDown (ev) {
    this.getCharacters({ next: true })
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
        this.characters = [...this.characters, ...results]
        this.info = info
      })
  }
}
