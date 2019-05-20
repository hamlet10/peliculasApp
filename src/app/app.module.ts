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

@NgModule({
  declarations: [AppComponent, HomeComponent, BuscarComponent, NavbarComponent],
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
