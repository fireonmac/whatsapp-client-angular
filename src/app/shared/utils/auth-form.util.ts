import { FormControl, Validators } from '@angular/forms';

export enum AuthFormConfig {
  PasswordMinLength = 8,
  PasswordMaxLength = 16,
}

export class AuthFormUtil {
  static generatePasswordFormGroupConfig() {
    return [
      '',
      [
        Validators.required,
        Validators.minLength(AuthFormConfig.PasswordMinLength),
        Validators.maxLength(AuthFormConfig.PasswordMaxLength),
      ],
    ];
  }

  static generateEmailFormGroupConfig() {
    return ['', [Validators.email, Validators.required]];
  }

  static shouldControlShowErrorFeedback<T>(control: FormControl<T>) {
    if (control.invalid && control.touched && control.dirty) {
      return true;
    } else {
      return false;
    }
  }
}
