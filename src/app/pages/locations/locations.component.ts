import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { Subscription } from 'rxjs'
import { IInfo } from 'src/app/shared/models/info.interface'
import { LocationsService } from './locations.service'
import { ILocation } from './models/locations.interface'

@Component({
  selector: 'spa-location',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit {
  private subs?: Subscription
  public locations?: ILocation[] = []
  public dataSource?: MatTableDataSource<ILocation>
  public info?: IInfo
  public displayedColumns = ['name', 'type', 'dimension', 'qttResidents']
  public count = 0
  public qttResidents = 0

  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(private readonly locationsService: LocationsService) {}

  ngOnInit() {
    this.getLocations()
  }

  ngOnDestroy() {
    this.subs?.unsubscribe()
  }

  onPageFired(ev) {
    if ((ev.pageIndex + 1) * ev.pageSize === ev.length) {
      this.getLocations({ next: true })
    }
  }

  getLocations({ next = false } = {}) {
    this.subs = this.locationsService
      .getLocations({ next })
      .subscribe(({ info, results }) => {
        this.locations = [...this.locations, ...results]
        this.dataSource = new MatTableDataSource(this.locations)
        this.dataSource.paginator = this.paginator
        this.info = info
        this.count = this.count + results?.length ?? 0
        this.qttResidents = results.length ?? 0
      })
  }
}
