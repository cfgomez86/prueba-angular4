import { Component, Input, OnInit } from '@angular/core';

import { Club } from '../../modelo/club.modelo';
import { TablaDescensoComponent } from '../tabla-descenso.component/tabla-descenso.component';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./../app.component.css']
})

export class JuegosComponent implements OnInit {

  puntosAmerica = 1;
  puntosTulua = 1;
  puntosJaguares= 1;
  golesAmerica = 0;
  golesTulua = 0;
  golesSantaFe = 0;
  golesPasto = 0;
  golesPetrolera = 0;
  golesJaguares = 0;

  @Input() equipos = [];

  ngOnInit() {
    this.iniciarEquipos();
  }

  onChangeGoles(goles: number, equipo: string) {
    if (equipo === 'Pasto') {
      this.golesPasto = goles;
    } else if (equipo === 'America') {
      this.golesAmerica = goles;
    } else if (equipo === 'Cortulua') {
      this.golesTulua = goles;
    } else if (equipo === 'SantaFe') {
      this.golesSantaFe = goles;
    } else if (equipo === 'Petrolera') {
      this.golesPetrolera = goles;
    } else if (equipo === 'Jaguares') {
      this.golesJaguares = goles;
    }

    if (equipo === 'America' || equipo === 'Pasto') {
      this.puntosAmerica = this.calcularPuntos(this.golesAmerica, this.golesPasto);
    }

    if (equipo === 'Cortulua' || equipo === 'SantaFe') {
      this.puntosTulua = this.calcularPuntos(this.golesTulua, this.golesSantaFe);
    }

    if (equipo === 'Petrolera' || equipo === 'Jaguares') {
      this.puntosJaguares = this.calcularPuntos(this.golesJaguares, this.golesPetrolera);
    }
  }

  calcularTabla() {
    this.iniciarEquipos();
    this.equipos.forEach(filtro => {
      if (filtro.nombre === 'America') {
        filtro.cantidad++;
        filtro.puntos = filtro.puntos + this.puntosAmerica;
      } else if (filtro.nombre === 'Cortulua') {
        filtro.cantidad++;
        filtro.puntos = filtro.puntos + this.puntosTulua;
      } else if (filtro.nombre === 'Jaguares') {
        filtro.cantidad++;
        filtro.puntos = filtro.puntos + this.puntosJaguares;
      }
    });
  }

  calcularPuntos(principal: number, alterno: number): number {
    let puntos = 0;
    if (principal > alterno) {
      puntos = 3;
    } else if (principal === alterno) {
      puntos = 1;
    }
    return puntos;
  }

  iniciarEquipos() {
    this.equipos =  [
      new Club('Tigres', 106, 103),
      new Club('Jaguares', 105, 113),
      new Club('America', 105, 114),
      new Club('Cortulua', 105, 116),
      new Club('Bucaramanga', 106, 119)
    ];
  }

}
