export interface AuthenticatedUser {
  id: string;
  name: string;
  email: string;
  picture?: string;
  status?: string;
  token: string;
}
