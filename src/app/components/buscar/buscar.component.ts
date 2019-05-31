import { Component, OnInit } from "@angular/core";
import { PeliculasService, Pelicula } from "../../providers/peliculas.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, NgModel } from "@angular/forms";

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html",
  styles: []
})
export class BuscarComponent implements OnInit {
  peliculas: Pelicula[] = [];
  forma: FormGroup;
  texto: string;

  constructor(private _ps: PeliculasService, private _router: Router) {
    this.forma = new FormGroup({
      buscar: new FormControl("")
    });
  }

  ngOnInit() {}

  buscar_pelicula() {
    this.texto = this.forma.value.buscar;
    this._ps.buscarPelicula(this.texto).subscribe((data: any) => {
      this.peliculas = data.results as Array<Pelicula>;
      console.log(this.peliculas);
    });
    this._router.navigate(["buscar", this.texto]);
  }

  ver_pelicula(id: number) {
    // console.log(id);
    this._router.navigate([`buscar/${this.texto}/pelicula`, id]);
  }
}
