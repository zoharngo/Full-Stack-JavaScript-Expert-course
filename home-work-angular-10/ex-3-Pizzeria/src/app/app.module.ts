import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzeriaService } from './shared/services/pizzeria-service.service';
import { UnitPipe } from './shared/pipes/unit/unit.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    UnitPipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PizzeriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
