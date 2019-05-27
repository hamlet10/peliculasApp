import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class PeliculasService {
  private apikey: string = "a5086b3445b98b603ebfde0f09e15994";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) {}

  getPopulares() {
    let url = `${
      this.urlMoviedb
    }/discover/movie?sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, "JSONP_CALLBACK").pipe(map(res => res));
  }

  buscarPelicula(texto: string, callback = "JSONP_CALLBACK") {
    let url = `${
      this.urlMoviedb
    }/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, callback).pipe(map(res => res));
  }

  getPeliculaById(id: number, callback = "") {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${
      this.apikey
    }&&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, callback).pipe(map(res => res));
  }
}

export interface Pelicula {
  id?: number;
  original_title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  Image?: string;
}
