import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    senha: [
      '',
      Validators.compose([Validators.required, Validators.minLength(6)])
    ],
  });

  mensagensErro = {
    email: [
      {tipo: 'requerid', aviso: 'Tem que escrever algo'}, 
      {tipo: 'email', aviso: 'Tem que ser um email'}
    ],
    senha: [
      {tipo: 'requerid', aviso: 'Quer entrar como?'}, 
      {tipo: 'minlength', aviso: 'Mais um pouco...'}
    ],
  };

  constructor(private formBuilder: FormBuilder) { }
  
  get email(){
    return this.loginForm.get('email');
  }
  get senha(){
    return this.loginForm.get('senha');
  }

  ngOnInit() {}
}
