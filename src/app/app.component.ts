import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proyecto01';
  contenidos: any[] = [
    {
      saber: `Conceptos de Tecnología, TIC,
    NTIC, Evolución de las WEB,
    diferencia entre página, portal
    y sistema WEB.
    Proyecto 1 HTML5`,
      semana: 1,
      sincronica: true,
      asincronica: true,
    },
    {
      saber: `Conceptos de Tecnología, TIC,
    NTIC, Evolución de las WEB,
    diferencia entre página, portal
    y sistema WEB.
    Proyecto 1 HTML5`,
      semana: 1,
      sincronica: true,
      asincronica: true,
    },
    {
      saber: `Conceptos de Tecnología, TIC,
    NTIC, Evolución de las WEB,
    diferencia entre página, portal
    y sistema WEB.
    Proyecto 1 HTML5`,
      semana: 1,
      sincronica: true,
      asincronica: true,
    },
    {
      saber: `Conceptos de Tecnología, TIC,
    NTIC, Evolución de las WEB,
    diferencia entre página, portal
    y sistema WEB.
    Proyecto 1 HTML5`,
      semana: 1,
      sincronica: true,
      asincronica: true,
    },
    {
      saber: `Conceptos de Tecnología, TIC,
    NTIC, Evolución de las WEB,
    diferencia entre página, portal
    y sistema WEB.
    Proyecto 1 HTML5`,
      semana: 1,
      sincronica: true,
      asincronica: true,
    },
    {
      saber: `Conceptos de Tecnología, TIC,
    NTIC, Evolución de las WEB,
    diferencia entre página, portal
    y sistema WEB.
    Proyecto 1 HTML5`,
      semana: 1,
      sincronica: true,
      asincronica: false,
    },
    {
      saber: `Conceptos de Tecnología, TIC,
    NTIC, Evolución de las WEB,
    diferencia entre página, portal
    y sistema WEB.
    Proyecto 1 HTML5`,
      semana: 1,
      sincronica: true,
      asincronica: true,
    },
    {
      saber: `Conceptos de Tecnología, TIC,
    NTIC, Evolución de las WEB,
    diferencia entre página, portal
    y sistema WEB.
    Proyecto 1 HTML5`,
      semana: 1,
      sincronica: true,
      asincronica: true,
    },
  ];
  docente: string = 'Mae. Ing. Rolando Marcelo Ticona Barroso';
  justificacion: string = `En la actualidad toda institución requiere interactuar de menor a mayor manera con las
  nuevas tecnologías de información y comunicación siendo el uso de las tecnologías online
  una herramienta primordial para incorporar a la institución en el nuevo enfoque de
  mercado laboral y competitividad empresarial. El buen manejo de las tecnologías online
  proporciona una ventaja competitiva a los profesionales e instituciones que hacen uso
  efectivo de estas tecnologías.`;
}
