import { Component, OnInit } from '@angular/core';
//importar componente para que funcione
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {

//Crear variable de instancia para almacenar los datos con los que trata el Servicio
//infoPortfolio: any;
nombrePerfil: string = '';
rollPerfil: string = '';
acercaDeMiPerfil: string = '';

constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {

    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?
    this.portfolioService.getDatos().subscribe(datos => {
      console.log(datos);
     // this.infoPortfolio=datos;
     this.nombrePerfil=datos.nombrePerfil
     this.rollPerfil=datos.rollPerfil
     this.acercaDeMiPerfil=datos.acercaDeMiPerfil
    });
  }

}
