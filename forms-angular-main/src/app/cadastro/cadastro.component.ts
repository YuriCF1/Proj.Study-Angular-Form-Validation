import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../services/consulta-cep.service';
import { IEndereco } from '../Interfaces/Iapi';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

// interface Endereco {
//   logradouro: string;
//   cidade: string;
// }
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit(): void {
  }

  register(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['./sucesso'])
    } else {
      alert("Form invalido")
    }
    console.log(form);
    console.log(form.controls);
  }



  consultaCep(ev: FocusEvent, formDatas: NgForm) {
    const inputElement = ev.target as HTMLInputElement;
    const cepValor = inputElement.value;

    if (cepValor && cepValor !== '') {
      this.cepService.getConsultaCep(cepValor).subscribe(resultado => {
        console.log(resultado);
        console.log(typeof (resultado));

        const resultadoAPI: IEndereco = resultado as IEndereco;
        console.log(resultadoAPI);
        this.settingAdress(resultadoAPI, formDatas)

      });
    } else {
      alert('Formulário inválido');
    }
  }

  settingAdress(resultadoAPI: IEndereco, formData: NgForm) {
    formData.form.patchValue({
      endereco: resultadoAPI.logradouro,
      complemento: resultadoAPI.complemento,
      bairro: resultadoAPI.bairro,
      cidade: resultadoAPI.localidade,
      estado: resultadoAPI.uf
    })
  }
}
