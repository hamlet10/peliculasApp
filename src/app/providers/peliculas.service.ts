import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { jsonpCallbackContext } from "@angular/common/http/src/module";

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

    return this.http.jsonp(url, "getPopulares").pipe(map(res => res));
  }

  buscarPelicula(texto: string) {
    let url = `${
      this.urlMoviedb
    }/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, "callback").pipe(map(res => res));
  }
}

export interface Pelicula {
  id?: number;
  original_title: string;
  backdrop_path: string;
}
