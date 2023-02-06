import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ApiService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  };

  constructor( private http: HttpClient ) { }

  private formatErrors(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  get<T>(path: string): Observable<T> {
    return this.http
    .get<T>(`${environment.apiUrl}${path}`, 
      this.httpOptions)
      .pipe(catchError((error) => this.formatErrors(error, null)));
  }

  patch<T>(path: string, body: Object = {}): Observable<T> {
    return this.http
    .patch<T>(`${environment.apiUrl}${path}`,
      JSON.stringify(body),
      this.httpOptions)
      .pipe(catchError((error) => this.formatErrors(error, null)));
  }


  post<T>(path: string, body: Object = {}): Observable<T> {
    return this.http
    .post<T>(`${environment.apiUrl}${path}`,
      JSON.stringify(body),
      this.httpOptions)
      .pipe(catchError((error) => this.formatErrors(error, null)));
  }

  delete<T>(path: string): Observable<T> {
    return this.http
    .delete<T>(`${environment.apiUrl}${path}`, 
      this.httpOptions)
      .pipe(catchError((error) => this.formatErrors(error, null)));
  }

}
