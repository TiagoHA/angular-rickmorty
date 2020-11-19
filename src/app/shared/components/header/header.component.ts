import { Component, OnDestroy, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'spa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public url = ''

  public firstButton
  public secondButton
  public buttons = []
  private subs: Subscription

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.subs = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = this.router.url
        this.updatingLinks(this.router.url)
      }
    })
  }

  ngOnDestroy() {
    this.subs?.unsubscribe()
  }

  updatingLinks(link: string) {
    const urls = [
      { name: 'Episodes', url: '/episodes' },
      { name: 'Characters', url: '/characters' },
      { name: 'Locations', url: '/locations' },
    ]

    this.buttons = urls
      .filter((url) => url.url !== link)
      .sort((a, b) => a.name.localeCompare(b.name))
    ;[this.firstButton, this.secondButton] = this.buttons
  }
}
