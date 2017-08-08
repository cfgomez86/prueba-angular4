import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { JuegosComponent } from './juegos.component/juegos.component';
import { TablaDescensoComponent } from './tabla-descenso.component/tabla-descenso.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    JuegosComponent,
    TablaDescensoComponent
  ],
  imports: [
    BrowserModule, OrderModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
