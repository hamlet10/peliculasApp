import { Component, OnInit } from "@angular/core";
import { PeliculasService, Pelicula } from "../../providers/peliculas.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, NgModel } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html",
  styles: []
})
export class BuscarComponent implements OnInit {
  peliculas: Pelicula[] = [];
  forma: FormGroup;
  texto: string;

  constructor(private _ps: PeliculasService, private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.forma = new FormGroup({
      buscar: new FormControl("")
    });
  }

  ngOnInit() {

    let parametro
    this._activatedRoute.params.subscribe(params => {
      parametro = params.texto
      // console.log(params);
    })
    if (parametro != undefined) {
      this.forma.reset({
        buscar: parametro
      })

      this.buscar_pelicula()
    }


  }


  buscar_pelicula() {
    this.texto = this.forma.value.buscar;
    this._ps.buscarPelicula(this.texto).subscribe((data: any) => {
      this.peliculas = data.results as Array<Pelicula>;
    });
    // this._router.navigate(["buscar", this.texto]);

  }

  ver_pelicula(id: number) {
    // console.log(id);
    this._router.navigate([`buscar/${this.texto}/pelicula`, id]);
  }
}
