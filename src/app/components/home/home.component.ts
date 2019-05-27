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
  @Input() pelicula: Pelicula;
  constructor(public _ps: PeliculasService, private _router: Router) {
    this._ps.getPopulares().subscribe((data: any) => {
      this.peliculas = data.results as Array<Pelicula>;
      console.log(this.peliculas);
    });
  }

  ver_pelicula(id: number) {
    // console.log(id);
    this._router.navigate(["/pelicula", id]);
    this._ps.getPeliculaById(id).subscribe(data => console.log(data));
  }
}
