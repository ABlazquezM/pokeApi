import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-poke-foto',
  templateUrl: './poke-foto.component.html',
  styleUrls: ['./poke-foto.component.scss']
})
export class PokeFotoComponent {
  

  @Input() pokemon?:Pokemon; 

}
