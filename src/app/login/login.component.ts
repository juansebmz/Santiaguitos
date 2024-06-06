import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre: string = "";
  grado: string = "";

  constructor(private http: HttpClient, private router: Router) { }

  setGrado(grado: string) {
    this.grado = grado;
  }

  save() {
    let bodyData = {
      "nombre": this.nombre,
      "grado": this.grado,
    };

    this.http.post("/api/v1/santiaguitos/save", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Te registraste correctamente");

      this.nombre = '';
      this.grado = '';

      this.router.navigate(['/landing-page']);
    });
  }

  ngOnInit(): void { }
}
