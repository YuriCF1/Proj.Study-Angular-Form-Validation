import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { ConsultaCepService } from 'src/app/services/consulta-cep.service';

@Directive({
  selector: '[validadorCep]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: ValidandoCEPDirective,
    multi: true
  }]
})
export class ValidandoCEPDirective implements AsyncValidator {

  constructor(private getZipCode: ConsultaCepService) { }

  // validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const zipCode = control.value;

    return this.getZipCode.getConsultaCep(zipCode).pipe(map(
      (resultado: any) => resultado.erro ? { 'validadorCep': true } : null
    ))
  }
}
