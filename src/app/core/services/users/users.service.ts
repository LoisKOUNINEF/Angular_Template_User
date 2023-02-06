import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from 'src/app/core/dto/user.dto';
import { User } from 'src/app/core/models/user.model';
import { ApiService } from 'src/app/core/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly usersUrl = 'users'

  constructor( private apiService: ApiService ) { }

  getAll(): Observable<User[]> {
    return this.apiService.get(this.usersUrl);
  }

  getOneById(id: string): Observable<User> {
    return this.apiService.get(`${this.usersUrl}/${id}`);
  }

  getOneByEmail(email: string): Observable<User> {
    return this.apiService.get(`${this.usersUrl}?email=${email}`)
  }

  update(userDto: UserDTO, id: string): Observable<User> {
    return this.apiService.patch(`${this.usersUrl}/${id}`, userDto);
  }

  delete(id: string): Observable<any> {
    return this.apiService.delete(`${this.usersUrl}/${id}`);
  }
}
