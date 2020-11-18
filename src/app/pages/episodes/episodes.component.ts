import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { Subscription } from 'rxjs'
import { IInfo } from 'src/app/shared/models/info.interface'
import { EpisodesService } from './episodes.service'
import { IEpisode } from './models/episodes.interface'

@Component({
  selector: 'spa-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  private subs?: Subscription
  public episodes?: IEpisode[] = []
  public dataSource?: MatTableDataSource<IEpisode>
  public info?: IInfo
  public displayedColumns: string[] = ['name', 'air_date', 'episode']
  public count = 0

  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(private readonly episodesService: EpisodesService) {}

  ngOnInit() {
    this.getEpisodes()
  }

  getRecord(row) {
    console.log(row)
  }

  ngOnDestroy() {
    this.subs?.unsubscribe()
  }

  onPageFired(ev) {
    if ((ev.pageIndex + 1) * ev.pageSize === ev.length) {
      this.getEpisodes({ next: true })
    }
  }

  getEpisodes({ next = false } = {}) {
    this.subs = this.episodesService
      .getEpisodes({ next })
      .subscribe(({ info, results }) => {
        this.episodes = [...this.episodes, ...results]
        this.dataSource = new MatTableDataSource(this.episodes)
        this.dataSource.paginator = this.paginator
        this.info = info
        this.count = this.count + results?.length
      })
  }
}
