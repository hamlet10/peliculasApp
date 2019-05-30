import { Component, OnInit } from "@angular/core";
import { PeliculasService, Pelicula } from "../../providers/peliculas.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html",
  styles: []
})
export class BuscarComponent implements OnInit {
  peliculas: Pelicula[] = [];
  buscar: string;
  constructor(private _ps: PeliculasService, private _router: Router) {}

  ngOnInit() {}

  buscar_pelicula() {
    this._ps.buscarPelicula(this.buscar).subscribe((data: any) => {
      this.peliculas = data.results as Array<Pelicula>;
      console.log(this.peliculas);
    });
    // console.log(this.buscar);
  }

  ver_pelicula(id: number) {
    // console.log(id);
    this._router.navigate(["buscar/pelicula", id]);
  }
}
