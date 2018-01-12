import { AbstractControl } from "@angular/forms/src/model";

export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value;
    let repeatPass = AC.get('repeatPass').value;
    if (password !== repeatPass) {
      AC.get('repeatPass').setErrors({ MatchPassword: true });
    } else {
      return null;
    }
  }
}
