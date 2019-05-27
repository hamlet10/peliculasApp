import { Component, OnInit } from "@angular/core";
import {
  PeliculasService,
  Pelicula
} from "src/app/providers/peliculas.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pelicula",
  templateUrl: "./pelicula.component.html",
  styles: []
})
export class PeliculaComponent implements OnInit {
  pelicula: Pelicula = {
    original_title: "",
    backdrop_path: "",
    poster_path: "",
    overview: ""
  };
  constructor(
    private _ps: PeliculasService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    let id: number;
    this._activatedRoute.params.subscribe(params => {
      console.log(params["id"]);
      id = params["id"];
    });
    this._ps.getPeliculaById(id).subscribe((data: Pelicula) => {
      this.pelicula = data;
    });
  }

  ngOnInit() {}

  regresar() {
    this._router.navigate(["/home"]);
  }
}
