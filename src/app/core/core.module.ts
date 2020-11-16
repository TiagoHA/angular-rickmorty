import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule, BrowserModule, CommonModule, RouterModule],
  exports: [BrowserAnimationsModule, BrowserModule, CommonModule, RouterModule],
})
export class CoreModule {}
