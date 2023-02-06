export class UserDTO {
	email: string | undefined;
	password: string | undefined;
	isAdmin?: boolean;

	constructor(formValue: UserFormValue) {
		this.email = formValue.email;
		this.password = formValue.password;
		this.isAdmin = formValue.isAdmin;
	}
}

export interface UserFormValue {
	email?: string;
	password?: string;
	isAdmin?: boolean;
}
