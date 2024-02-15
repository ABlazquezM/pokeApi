import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PokeFotoComponent } from './components/poke-foto/poke-foto.component';
import { PokeTarjetaComponent } from './components/poke-tarjeta/poke-tarjeta.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokeFotoComponent,
    PokeTarjetaComponent,
    PokeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
