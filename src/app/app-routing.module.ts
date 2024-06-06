import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AprenderComponent} from "./aprender/aprender.component";
import { ColoresComponent} from "./colores/colores.component";
import { FrutasComponent} from "./frutas/frutas.component";
import { InglesComponent} from "./ingles/ingles.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'aprender', component: AprenderComponent},
  { path: 'colores', component: ColoresComponent},
  { path: 'frutas', component: FrutasComponent},
  { path: 'ingles', component: InglesComponent},

  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
