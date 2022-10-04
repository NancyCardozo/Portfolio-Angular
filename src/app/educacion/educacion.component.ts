import { Component, OnInit } from '@angular/core';
//importar componente para que funcione
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
//Crear variable de instancia para almacenar los datos con los que trata el Servicio
//infoPortfolio: any;
id: string = '';
logoEducacion: string = '';
inicio: string = '';
fin: string = '';
titulo: string = '';
descripcion: string = '';
direccion: string = '';


  constructor(
        //Inyectar el Servicio para tener acceso en la clase a los Métodos
        private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
     //Esto es almacenar en la variable de instancia los datos recuperados por el Servicio?
     this.portfolioService.getDatos().subscribe(datos => {
      console.log(datos);
     // this.infoPortfolio=datos;
     this.id=datos.id;
     this.inicio=datos.inicio;
     this.fin=datos.fin;
     this.titulo=datos.titulo;
     this.descripcion=datos.descripcion;
     this.direccion=datos.direccion;

    });
  }

}
