import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[underAgeFilter]',
  providers: [{
    provide: NG_VALIDATORS, //Token para adicionar novas diretivas validadaoras para a coleção
    useExisting: UnderAngeFilterDirective, //Dizendo qual classe que será responsável para a validação
    multi: true
  }]
})
export class UnderAngeFilterDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const birthDate = control.value;
    const yaerhBirth = new Date(birthDate).getFullYear();
    const yearOfEighteen = yaerhBirth + 18;
    const currentYear = new Date().getFullYear();

    const underAge = yearOfEighteen <= currentYear;

    return underAge ? null : { 'underAgeFilter': true }

  }
}
