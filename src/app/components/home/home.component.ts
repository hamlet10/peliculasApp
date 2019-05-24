import { Component, Input } from "@angular/core";
import { PeliculasService, Pelicula } from "../../providers/peliculas.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent {
  peliculas: Pelicula[] = [];
  @Input() pelicula: Pelicula;
  constructor(public _ps: PeliculasService) {
    this._ps.getPopulares().subscribe((data: any) => {
      this.peliculas = data.results as Array<Pelicula>;
      console.log(this.peliculas);
    });
  }

  ver_pelicula(pelicula: Pelicula) {
    console.log(pelicula.id);
  }
}
