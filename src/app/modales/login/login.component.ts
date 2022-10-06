import { Component, OnInit } from '@angular/core';
import { bindNodeCallback, from } from 'rxjs';

//formulario login
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form: FormGroup
//injectar en el constructor el formBuilder
  constructor( private formBuilder: FormBuilder) {
//creamos el grupo de control para el formulario del login    
    this.form = this.formBuilder.group ({
      password:['',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      email:[ '',[Validators.required, Validators.email]],
    })
   }

  ngOnInit(): void { }
  get userValid (){
    return {
      "email":"test@test.com",
      "password":"123"
    }
  }
  get Password(){
    return this.form.get ('password') }
  get Mail(){
    return this.form.get ('email') }

  get PasswordValid(){
    return this.Password == this.form.get ('password')}  

  
  get MailValid(){
      return this.Mail == this.form.get ('email')}  
  

  onEnviar ( event:Event){
  //Detenemos la propagacion o ejecucion del comportamiento submit de el form
    event.preventDefault;
    if (this.form.valid){
  //Llamamos a nuestro serviddor para enviar los datos al servidor
  //Tambien podriamos ejecutar alguna logica extra 
  alert ( 'todo salio bien, enviar formulario')
    }
    else {
      this.form.markAllAsTouched();
  //cerramos todas las validaciones para que se ejecute los msj de error en el trastape    
    }
  }
}
