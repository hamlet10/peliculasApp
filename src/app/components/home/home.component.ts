import { Component, Input } from "@angular/core";
import { PeliculasService, Pelicula } from "../../providers/peliculas.service";
import { element } from "@angular/core/src/render3";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent {
  peliculas: Pelicula[] = [];
  pelicula: Pelicula;
  constructor(public _ps: PeliculasService) {
    this._ps.getPopulares().subscribe((data: any) => {
      for (let i = 0; data.results.length > i; i++) {
        this.pelicula.id = data.results[i].id;
        this.pelicula.backdrop_path = data.results[i].backdrop_path;
        this.pelicula.original_title = data.results[i].original_title;
        this.peliculas.push(this.pelicula);
        console.log(data.results[i]);
      }
      console.log(data);
    });
  }
}
