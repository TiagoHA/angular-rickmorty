import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatPaginatorModule } from '@angular/material/paginator'

@NgModule({
  declarations: [],
  imports: [CommonModule, MatPaginatorModule, MatPaginatorModule],
  exports: [MatPaginatorModule, MatPaginatorModule],
})
export class SharedModule {}
