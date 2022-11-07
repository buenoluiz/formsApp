import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm = this.formBuilder.group({
    nome: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(3)])],
    email: ['', Validators.compose([Validators.required, Validators.email,])],
    cpf: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(11), Validators.maxLength(11)])],
    senha: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    confirma: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
  });

  mensagensErro = {
    nome: [
      {tipo: 'requerid', aviso: 'Seu nome!'}, 
      {tipo: 'minLength', aviso: 'Tem que ser um nome'}
    ],
    email: [
      {tipo: 'requerid', aviso: 'Tem que escrever algo'}, 
      {tipo: 'email', aviso: 'Tem que ser um email'}
    ],
    cpf: [
      {tipo: 'requerid', aviso: 'Tem que escrever algo'}, 
      {tipo: 'cpf', aviso: 'Tem que ser seu CPF'}
    ],
    senha: [
      {tipo: 'requerid', aviso: 'Quer entrar como?'}, 
      {tipo: 'minLength', aviso: 'Mais um pouco...'}
    ],
  };

  constructor(private formBuilder: FormBuilder) { }
  
  get email(){
    return this.registroForm.get('email');
  }
  get senha(){
    return this.registroForm.get('senha');
  }

  ngOnInit() {}
}
