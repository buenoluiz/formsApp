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
      {tipo: 'minLength', aviso: 'Mais um pouco...'}
    ],
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {}
}
