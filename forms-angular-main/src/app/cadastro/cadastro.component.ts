import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../services/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit(): void {
  }

  register(form: NgForm) {
    // if (form.valid) {
    //   this.router.navigate(['./sucesso'])
    // } else {
    //   alert("Form invalido")
    // }
    // console.log(form);
    console.log(form.controls);
  }

  consultaCep(ev: FocusEvent) {
    const inputElement = ev.target as HTMLInputElement;
    const cepValor = inputElement.value;

    if (cepValor) {
      this.cepService.getConsultaCep(cepValor).subscribe(resultado => {
        console.log(resultado);
      });
    }
  }
}
