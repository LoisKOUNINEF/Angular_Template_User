export class User {
  id?: string;
  email: string;
  password: string;
  isAdmin?: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  constructor( 
    email: string, 
    password: string, 
    isAdmin: boolean,
    ) {
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
  }
}
