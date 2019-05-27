import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "peliculasImages"
})
export class PeliculasImagesPipe implements PipeTransform {
  transform(pelicula: any, args?: any): any {
    let url = "http://image.tmdb.org/t/p/w500";
    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    } else {
      if (pelicula.poster_path) {
        return url + pelicula.poster_path;
      } else {
        return "assets/img/not-image.jpg";
      }
    }
  }
}
