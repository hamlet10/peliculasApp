import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { HomeComponent } from "./components/home/home.component";
import { BuscarComponent } from "./components/buscar/buscar.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";

import { AppComponent } from "./app.component";

//routes
import { APP_ROUTING } from "./providers/app.routes";

//services
import { PeliculasService } from "../app/providers/peliculas.service";
import { DescriptionPipe } from './pipes/description.pipe';
<<<<<<< HEAD
import { PeliculaTarjetaComponent } from './components/pelicula-tarjeta/pelicula-tarjeta.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BuscarComponent, NavbarComponent, DescriptionPipe, PeliculaTarjetaComponent],
=======
import { PeliculasImagesPipe } from './pipes/peliculas-images.pipe';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BuscarComponent, NavbarComponent, DescriptionPipe, PeliculasImagesPipe, PeliculaComponent],
>>>>>>> 473106755c7ea7a7c9489294f254e7278aa3b85b
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    APP_ROUTING
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
