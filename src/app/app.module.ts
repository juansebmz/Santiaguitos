import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InglesComponent } from './ingles/ingles.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { ColoresComponent } from './colores/colores.component';
import { FrutasComponent } from './frutas/frutas.component';
import { AprenderComponent } from './aprender/aprender.component';

@NgModule({
  declarations: [
    AppComponent,
    InglesComponent,
    HeaderComponent,
    LoginComponent,
    LandingPageComponent,
    FooterComponent,
    ColoresComponent,
    FrutasComponent,
    AprenderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
