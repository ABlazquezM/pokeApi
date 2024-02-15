import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnChanges {

    @Input() pokemon? : Pokemon;
    @Input() abierto:boolean = false;
    @Output() cambiarAbierto = new EventEmitter();
    descripcion:string = "";
    


  constructor(private pokemonService: PokemonService) { }

  ngOnChanges(): void {
    if(this.pokemon){
      this.pokemonService.getDescripcion(this.pokemon?.id).then(res =>{
      this.descripcion = res
      })
    }
  }


}
