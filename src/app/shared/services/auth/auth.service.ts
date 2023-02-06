import { Injectable } from '@angular/core';
import { 
  // BehaviorSubject, 
  filter, 
  map, 
  Observable } from 'rxjs';
import { UserDTO } from 'src/app/shared/dto/user.dto';
import { Result } from 'src/app/shared/models/result.model';
import { User } from 'src/app/shared/models/user.model';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly usersUrl = 'users/';
  private readonly authUrl = 'auth/';
  private readonly pwdResetUrl = 'forgot-password/';
  private readonly loginUrl = this.usersUrl + 'login';
  private readonly logoutUrl = this.usersUrl + 'logout';
  private readonly checkAuthUrl = this.authUrl + 'auth';
  private readonly checkAdminUrl = this.authUrl + 'admin';
  
  // public isAuth: BehaviorSubject<boolean> = new BehaviorSubject(false);
  // public isAdmin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAuth: boolean = false;
  public isAdmin: boolean = false;

  constructor( private apiService: ApiService ) { }

  public signup(userDto: UserDTO): Observable<Result<User>> {
    return this.apiService
    .post(this.usersUrl, userDto);
  }

  public login(userDto: UserDTO): Observable<Result<User>> {
    return this.apiService
    .post(this.loginUrl, userDto)
    .pipe(
      filter(res => !!res),
      map((response: any) => {
        if(response.isAdmin) {
          this.isAdmin = true;
        }
        this.isAuth = true;
        return response;
      })
    );
  }

  public checkAuthStatus(): Observable<Result<boolean>> {
    return this.apiService
    .get(this.checkAuthUrl)
    .pipe(
      filter(res => !!res),
      map((response: any) => {
        this.isAuth = response;
        return response;
      })
    );
  }

  public checkIfAdmin(): Observable<Result<boolean>> {
    return this.apiService
    .get(this.checkAdminUrl)
    .pipe(
      filter(res => !!res),
      map((response: any) => {
        this.isAdmin = response;
        return response;
      })
    );
  }

  public logout(): Observable<Result<any>> {
    return this.apiService
    .post(this.logoutUrl)
    .pipe(
      filter(res => !!res),
      map((response: any) => {
        this.isAdmin = false;
        this.isAuth = false;
        return response;
      })
    )
  }

  public sendPwdResetLink(userDto: UserDTO): Observable<Result<any>> {
    return this.apiService
    .post(this.pwdResetUrl, userDto);
  }

  public resetPwd(userDto: UserDTO, token: string) {
    return this.apiService
    .post(`${this.pwdResetUrl}${token}`, userDto);
  }
}

