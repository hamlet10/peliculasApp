import { Component, Input } from "@angular/core";
import { PeliculasService, Pelicula } from "../../providers/peliculas.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent {
  peliculas: Pelicula[] = [];
  peliculasCartelera: Pelicula[] = [];
  pequenos: Pelicula[] = [];

  constructor(public _ps: PeliculasService, private _router: Router) {
    this._ps.getPopulares().subscribe((data: any) => {
      this.peliculas = data.results as Array<Pelicula>;
    });
    this._ps.getCartelera().subscribe((data: any) => {
      this.peliculasCartelera = data.results as Array<Pelicula>;
    });
    this._ps.getPopularKids().subscribe((data: any) => {
      this.pequenos = data.results as Array<Pelicula>;
    });
  }

  ver_pelicula(id: number) {
    // console.log(id);
    this._router.navigate(["home/pelicula", id]);
  }
}
