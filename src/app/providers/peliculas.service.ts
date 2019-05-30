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

  getCartelera() {
    let sday = new Date().getDate();
    let smonth = new Date().getMonth();
    let syear = new Date().getFullYear();
    let sdate = syear + "-" + smonth + "-" + sday;
    let eday = sday;
    let emonth = smonth + 1;
    let eyear = syear;
    if (emonth > 12) {
      emonth = 1;
      eyear = eyear + 1;
    }
    let edate = eyear + "-" + emonth + "-" + eday;

    let url = `${
      this.urlMoviedb
    }/discover/movie?primary_release_date.gte=${sdate}&primary_release_date.lte=${edate}&sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "JSONP_CALLBACK").pipe(map(res => res));

    console.log(sdate);
  }

  getPopularKids() {
    let url = `${
      this.urlMoviedb
    }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, "JSONP_CALLBACK").pipe(map(res => res));
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
