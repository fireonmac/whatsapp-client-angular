import { Injectable, computed, signal } from '@angular/core';
import { AuthenticatedUser } from '../../types/authenticated-user.interface';
import { Subject } from 'rxjs';

interface AuthState {
  /**
   * Represents the state of authentication for a user.
   * Can be one of the following:
   * - AuthenticatedUser: When a user is logged in.
   * - null: When a user is logged out.
   * - undefined: When no action related to authentication has been taken.
   */
  user: AuthenticatedUser | null | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  state = signal<AuthState>({
    user: undefined,
  });

  user = computed(() => this.state().user);
  loggedIn = computed(() => !!this.user());
  loggedOut = computed(() => !this.user());
}
