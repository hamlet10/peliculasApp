import { Component, OnInit } from "@angular/core";
import {
  PeliculasService,
  Pelicula
} from "src/app/providers/peliculas.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-pelicula",
  templateUrl: "./pelicula.component.html",
  styles: []
})
export class PeliculaComponent implements OnInit {
  constructor(private _ps: PeliculasService) {}

  ngOnInit() {}
}
