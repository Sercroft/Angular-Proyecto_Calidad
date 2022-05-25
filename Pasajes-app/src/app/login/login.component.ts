import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  title = 'Bienvenido a Angular';
  curso: string = 'Calidad de software';
  profesor: string = 'Claudia ..';
  
  constructor() {}

  ngOnInit(): void {}
}
