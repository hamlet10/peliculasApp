import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../providers/peliculas.service";

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html",
  styles: []
})
export class BuscarComponent implements OnInit {
  _ps: PeliculasService;
  constructor() {}

  ngOnInit() {}

  //no furula
  seakPeli(textoBuscado: string) {
    console.log(textoBuscado);
    this._ps.buscarPelicula(textoBuscado).subscribe(data => console.log(data));
  }
}
