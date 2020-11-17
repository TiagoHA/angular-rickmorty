import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [BrowserAnimationsModule, BrowserModule, CommonModule],
})
export class CoreModule {}
