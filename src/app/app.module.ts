import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { HomeComponent } from "./components/home/home.component";
import { BuscarComponent } from "./components/buscar/buscar.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

//routes
import { APP_ROUTING } from "./providers/app.routes";

//services
import { PeliculasService } from "../app/providers/peliculas.service";
import { DescriptionPipe } from "./pipes/description.pipe";
import { PeliculasImagesPipe } from "./pipes/peliculas-images.pipe";
import { PeliculaComponent } from "./components/pelicula/pelicula.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    NavbarComponent,
    DescriptionPipe,
    PeliculasImagesPipe,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
