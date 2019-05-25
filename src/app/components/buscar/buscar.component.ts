import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../providers/peliculas.service";

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html",
  styles: []
})
export class BuscarComponent implements OnInit {
  constructor() {}

  _ps: PeliculasService;
  ngOnInit() {}

  //No furula
  buscar_pelicula(texto: string) {
    console.log(texto);
    this._ps.buscarPelicula(texto).subscribe((data: any) => console.log(data));
  }
}
