import { Component, Input } from '@angular/core';

import { Club } from '../../modelo/club.modelo';

@Component({
  selector: 'app-tabla-descenso',
  templateUrl: './tabla-descenso.component.html',
  styleUrls: ['./../app.component.css'],
})

export class TablaDescensoComponent {
  @Input() equipos = [];
  order = 'puntos';
}
