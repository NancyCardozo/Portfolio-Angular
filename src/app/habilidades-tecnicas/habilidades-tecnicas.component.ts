import { Component, OnInit } from '@angular/core';
//importar componente para que funcione
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-habilidades-tecnicas',
  templateUrl: './habilidades-tecnicas.component.html',
  styleUrls: ['./habilidades-tecnicas.component.css']
})
export class HabilidadesTecnicasComponent implements OnInit {

  //Crear variable de instancia para almacenar los datos con los que trata el Servicio
//infoPortfolio: any;
//para inicializar un array
habilidad: any;


  constructor(
         //Inyectar el Servicio para tener acceso en la clase a los Métodos
         private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
    this.portfolioService.getDatos().subscribe(datos => {
      //console.log(datos);
      //Definir la informacion a mostrar

     // this.infoPortfolio=datos;
     this.habilidad=datos.habilidad;
  


    }); 
  }

}
