import { Component, OnInit } from '@angular/core';
import { Pasajero } from './pasajero';
import { PasajeroService } from './pasajero.service';

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.component.html',
  styleUrls: ['./pasajeros.component.css'],
})
export class PasajerosComponent implements OnInit {
  pasajeros: Pasajero[] = [];

  constructor(private pasajeroService: PasajeroService) {}

  ngOnInit(): void {
    this.pasajeroService.getPasajeros().subscribe((pasajeros) => {
      this.pasajeros = pasajeros;
    });
  }
}
