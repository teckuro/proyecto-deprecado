import { Component, OnInit } from '@angular/core';
import { DotaService } from 'src/app/services/dota/dota.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuarioKuroko: number = 96704850;
  usuarioFugaze: number = 107362562;
  usuarioJaque: number = 133158617;

  constructor(private dotaService: DotaService) { }

  ngOnInit(): void {
    this.cargaInicial();
    this.obtenerUsuario();
    this.obtenerInfoRanking();
  }

  cargaInicial() {

    let request = {
      usuarioId: 123,
      fecha: new Date()
    }

    let respuesta = this.dotaService.pruebaObtenerData(request).toPromise();
  }

  obtenerUsuario() {
    let respuesta = this.dotaService.obtenerInfoPersona(this.usuarioJaque).toPromise();
  }

  obtenerInfoRanking() {
    let respuesta = this.dotaService.obtenerInfoRanking(this.usuarioJaque).toPromise();
  }
}
