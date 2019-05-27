import { Component, OnInit } from "@angular/core";
import { PeliculasService, Pelicula } from "../../providers/peliculas.service";

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html",
  styles: []
})
export class BuscarComponent implements OnInit {
  peliculas: Pelicula[] = [];
  constructor(private _ps: PeliculasService) {}

  ngOnInit() {}

  buscar_pelicula(texto: string) {
    this._ps.buscarPelicula(texto).subscribe((data: any) => {
      this.peliculas = data.results as Array<Pelicula>;
      console.log(this.peliculas);
    });
  }
}
