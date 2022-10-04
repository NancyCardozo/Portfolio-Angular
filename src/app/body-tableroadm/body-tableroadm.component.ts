import { Component, OnInit } from '@angular/core';
//importar componente para que funcione
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-body-tableroadm',
  templateUrl: './body-tableroadm.component.html',
  styleUrls: ['./body-tableroadm.component.css']
})
export class BodyTableroadmComponent implements OnInit {
  //Crear variable de instancia para almacenar los datos con los que trata el Servicio
infoPortfolio: any;
//nombre: string = '';
//apellido: string = '';


  constructor(
     //Inyectar el Servicio para tener acceso en la clase a los Métodos
     private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
     //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?
     this.portfolioService.getDatos().subscribe(datos => {
      console.log(datos);
     this.infoPortfolio=datos;
    //this.nombre=datos.nombre
    //this.apellido=datos.apellido
  });

}
}