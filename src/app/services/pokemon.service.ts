import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeapi';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getByPage(page:number,size:number = 40):Promise<Resultado[]>{ //obtener pokemons de una lista
    //if(page > 5) return []; // para no tener scroll infinito
    const offset = (page-1)*size;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`) //se comunica con una url y espera un resultado
    const resJson = await res.json();   
    if(resJson.results.length > 0 ) return resJson.results
    return [];
  }

  async getById(id:string):Promise<Pokemon>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) //se comunica con una url y espera un resultado
    const resJson = await res.json();   
    return resJson;
  }

  async getDescripcion(id:string | number):Promise<string>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const resJson = await res.json();
    const texto = resJson.flavor_text_entries.find((texto:any)=> texto.language.name === "es")
    return texto.flavor_text;

  }
}
