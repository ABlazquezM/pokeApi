import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  @ViewChild('tarjetas') tarjetasElement!: ElementRef; //genera una variable que hace referencia al elemento tarjetas

  listaPokemon: Resultado[] = []

  pagina: number = 1;
  cargando: boolean = false;
  pokemonSeleccionado?: Pokemon;
  detalle:boolean = false;

  ngOnInit(): void { //se ejecuta cuando se carga el componente por primera vez
    this.cargarLista();
    this.pokemonService.getById("1");
  }

  async cargarLista() {
    if (this.cargando) return;
    this.cargando = true;
    this.listaPokemon = [...this.listaPokemon, ...await this.pokemonService.getByPage(this.pagina)]
    this.pagina++;
    this.cargando = false;
  }

  onScroll(evento: any) {//va a escuchar todos los eventos de scroll 
    if (Math.round(
      this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop //si la altura que tiene tarjetasElement(todas las tarejetas) + lo que esta scrolleado es = a la altura de scrolleo total que tiene elemento => cargarLista
    ) === evento.srcElement.scrollHeight) {
      this.cargarLista()
    }
  }

  async tarjetaClickeada(evento: string) {
    if(this.pokemonSeleccionado && evento === this.pokemonSeleccionado?.id.toString()){
      return this.cabiarEstadoAbierto()
    }
    //console.log(evento); imprime el nº de la tarjeta clickeada
    this.pokemonSeleccionado = await this.pokemonService.getById(evento);
  }

  cabiarEstadoAbierto(){
    if(this.pokemonSeleccionado){
    this.detalle = !this.detalle;
    }
  }
}
