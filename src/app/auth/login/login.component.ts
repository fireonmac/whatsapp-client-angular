import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthFormUtil } from '../../shared/utils/auth-form.util';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  template: `
    <div class="min-h-screen flex flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-16 w-auto"
          src="assets/images/logo.svg"
          alt="Your Company"
        />
        <h2
          class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" [formGroup]="form" (ngSubmit)="login()">
          <label class="form-control w-full">
            <div class="label">
              <span class="label-text">Email address</span>
            </div>
            <input
              id="email"
              type="email"
              name="email"
              autocomplete="email"
              class="input input-bordered w-full"
              [class.input-error]="
                AuthFormUtil.shouldControlShowErrorFeedback(email)
              "
              [class.input-success]="email.valid"
              [formControl]="email"
            />
          </label>

          <label class="form-control w-full">
            <div class="label flex justify-between">
              <span class="label-text">Password</span>

              <div class="text-sm">
                <a
                  routerLink="auth/find-password"
                  class="font-semibold link link-primary"
                  >Forgot password?</a
                >
              </div>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="input input-bordered w-full"
              [class.input-error]="
                AuthFormUtil.shouldControlShowErrorFeedback(password)
              "
              [class.input-success]="password.valid"
              [formControl]="password"
            />
          </label>

          <div>
            <button type="submit" class="btn btn-primary btn-block">
              Sign in
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a routerLink="register" class="font-semibold link link-primary"
            >Join us!</a
          >
        </p>
      </div>
    </div>
  `,
  imports: [ReactiveFormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  #fb = inject(FormBuilder);

  AuthFormUtil = AuthFormUtil;

  form = this.#fb.nonNullable.group({
    email: AuthFormUtil.generateEmailFormGroupConfig(),
    password: AuthFormUtil.generatePasswordFormGroupConfig(),
  });

  email = this.form.controls.email;
  password = this.form.controls.password;

  login() {}
}
