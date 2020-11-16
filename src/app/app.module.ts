import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatToolbarModule]
})
export class AppModule {}
