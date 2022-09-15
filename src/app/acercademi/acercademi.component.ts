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
infoPortfolio: any;

  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {

    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?
    this.portfolioService.getDatos().subscribe(data => {
      console.log(data);
      this.infoPortfolio=data.uno;
    });
  }

}
