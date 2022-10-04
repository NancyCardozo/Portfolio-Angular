import { Component, OnInit } from '@angular/core';
//importar componente para que funcione
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  //Crear variable de instancia para almacenar los datos con los que trata el Servicio
//infoPortfolio: any;
id: string = '';
logoEmpresa: string = '';
inicio: string = '';
fin: string = '';
empresa: string = '';
descripcionExperiencia: string = '';
direccion: string = '';

  constructor(
     //Inyectar el Servicio para tener acceso en la clase a los Métodos
     private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {

     //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio
     this.portfolioService.getDatos().subscribe(datos => {
      console.log(datos);
     // this.infoPortfolio=datos;
this.id=datos.id;
     this.inicio=datos.inicio;
     this.fin=datos.fin;
     this.empresa=datos.empresa;
     this.descripcionExperiencia=datos.descripcion;
     this.direccion=datos.direccion;

    });
  }

}
