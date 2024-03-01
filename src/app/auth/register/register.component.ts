import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth-register',
  standalone: true,
  template: `Register`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterComponent {}
