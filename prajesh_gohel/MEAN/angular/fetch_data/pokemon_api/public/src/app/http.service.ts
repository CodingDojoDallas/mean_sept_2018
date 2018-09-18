import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserGetTestability } from '../../node_modules/@angular/platform-browser/src/browser/testability';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.getAbility();
  }
  getPokemon() {
    let swablu = this._http.get('https://pokeapi.co/api/v2/pokemon/333/');
    swablu.subscribe(data => console.log("Got our favorite pokemon!", data));
    swablu.subscribe((data: any) => {
      var str = "Swablu's abilities are ";
      for (var i = data.abilities.length - 1; i >= 0; i--) {
        if (i == 0) {
          str += "and "+data.abilities[i].ability.name+".";
        }
        else {
          str += data.abilities[i].ability.name+" "
        }
      }
      console.log(str);
    });
  }
  getAbility() {
    let ability = this._http.get('https://pokeapi.co/api/v2/ability/natural-cure/');
    ability.subscribe(data => console.log("Got our favorite ability!", data));
    ability.subscribe((data: any) => {
      console.log('There are', data.pokemon.length, 'pokemon with this ability!' );
      for (var i = 0; i < data.pokemon.length; i++) {
        console.log(data.pokemon[i].pokemon.name);
      }
    });
  }
}
