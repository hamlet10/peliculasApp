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
    let param
    this._activatedRoute.params.subscribe(res => {
      param = res.texto


      if (typeof param === 'undefined') {
        // console.log('param: ', param);

      } else {
        console.log('este es el parametro: ', param);
        // this.forma.value.buscar = param
        this.forma.setValue({ buscar: param })
        this.buscar_pelicula(param)



      }


    })


  }


  buscar_pelicula(buscar: string) {

    buscar = this.forma.value.buscar;
    this.texto = buscar
    // console.log('buscar:', buscar);
    // console.log('texto:', this.texto);
    this._ps.buscarPelicula(buscar).subscribe((res: any) => {
      this.peliculas = res.results as Array<Pelicula>

      // console.log(this.peliculas)
    })



  }

  ver_pelicula(id: number) {
    // console.log(id);
    this._router.navigate([`buscar/${this.texto}/pelicula`, id]);
  }
}
