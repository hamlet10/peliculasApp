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
  caller: string;

  constructor(
    private _ps: PeliculasService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    let id: number;

    this._activatedRoute.params.subscribe(params => {
      // console.log(params["id"]);
      id = params["id"];
    });
    this._ps.getPeliculaById(id).subscribe((data: Pelicula) => {
      this.pelicula = data;
    });
    this.caller = this._activatedRoute.snapshot.routeConfig.path as string;
    this.caller = this.caller.split("/")[0];
    this._activatedRoute.parent.params.subscribe(d => console.log(d));
  }

  ngOnInit() {}

  regresar() {
    this._router.navigate([`/${this.caller}`]);
  }
}
