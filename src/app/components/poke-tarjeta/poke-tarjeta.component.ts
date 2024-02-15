import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-tarjeta',
  templateUrl: './poke-tarjeta.component.html',
  styleUrls: ['./poke-tarjeta.component.scss']
})
export class PokeTarjetaComponent implements OnChanges {

  constructor(private pokemonService:PokemonService) { }


  ngOnChanges(): void {
    this.extraerInforcacion()
  }

  @Input() data?:Resultado;
  @Input() seleccionado:boolean= false;
  @Input() fullData?:Pokemon;
  @Output() clickeado = new EventEmitter<string>(); //escucha a <div id="tarjeta" (click)="clickeado">

  id:string = "0";

 

  

  extraerInforcacion(){
    if(this.data && this.data.url !== ""){
      this.id = this.data.url.substring(34,this.data.url.length-1)
      return
    }
    if(this.fullData){
      this.id = this.fullData.species.url.substring(42,this.fullData.species.url.length-1)
      this.data = {
        name: this.fullData.species.name,
        url: ""
      }
    }

  }
}
