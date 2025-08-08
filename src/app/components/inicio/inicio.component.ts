import { Component, OnInit } from '@angular/core';
import { DotaService } from 'src/app/services/dota/dota.service';

@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.component.html',
	styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
	usuarioKuroko = 96704850;
	usuarioFugaze = 107362562;
	usuarioJaque = 133158617;

	constructor(private dotaService: DotaService) {}

	ngOnInit(): void {
		this.cargaInicial();
		this.obtenerUsuario();
		this.obtenerInfoRanking();
	}

	cargaInicial() {
		const request = {
			usuarioId: 123,
			fecha: new Date()
		};

				const respuesta = this.dotaService.pruebaObtenerData(request).toPromise();
	}

	obtenerUsuario() {
		const respuesta = this.dotaService
			.obtenerInfoPersona(this.usuarioJaque)
			.toPromise();
	}
	obtenerInfoRanking() {
		const respuesta = this.dotaService
			.obtenerInfoRanking(this.usuarioJaque)
			.toPromise();
	}
}
