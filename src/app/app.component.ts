import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = [
    { label: 'Historias Clínicas', routerLink: '/historias-clinicas' },
    { label: 'Crear Historia Clínica', routerLink: '/agregar-historia-clinica' },
    { label: 'Detalles de Historias Clínicas', routerLink: '/detalles-historias-clinicas' },
  ];
}
