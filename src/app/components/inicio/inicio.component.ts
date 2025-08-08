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
	datos: any[] = [];
	int: any;

	constructor(private dotaService: DotaService) {}

	ngOnInit(): void {
		// this.cargaInicial();
		this.obtenerUsuario();
		this.obtenerInfoRanking();
		this.obtenerHeroes();
	}

	cargaInicial() {
		debugger;
		this.dotaService.pruebaObtenerData(this.usuarioKuroko).subscribe({
			next: (res) => (this.datos = res),
			error: (err) => console.error(err)
		});
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

	obtenerHeroes() {
		this.dotaService.pruebaObtenerDataHeroes(this.usuarioKuroko).subscribe({
			next: (res) => (this.datos = res),
			error: (err) => console.error(err)
		});
	}
}
