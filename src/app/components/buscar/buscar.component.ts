import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD
import { PeliculasService } from "../../providers/peliculas.service";
=======
import { PeliculasService, Pelicula } from "../../providers/peliculas.service";
>>>>>>> 473106755c7ea7a7c9489294f254e7278aa3b85b

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html",
  styles: []
})
export class BuscarComponent implements OnInit {
<<<<<<< HEAD
  _ps: PeliculasService;
  constructor() {}

  ngOnInit() {}

  //no furula
  seakPeli(textoBuscado: string) {
    console.log(textoBuscado);
    this._ps.buscarPelicula(textoBuscado).subscribe(data => console.log(data));
=======
  peliculas: Pelicula[] = [];
  constructor(private _ps: PeliculasService) {}

  ngOnInit() {}

  buscar_pelicula(texto: string) {
    this._ps.buscarPelicula(texto).subscribe((data: any) => {
      this.peliculas = data.results as Array<Pelicula>;
      console.log(this.peliculas);
    });
>>>>>>> 473106755c7ea7a7c9489294f254e7278aa3b85b
  }
}
