import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Console } from 'console';
import { delay, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }



  postRegister(data:any)
  {
  const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');
    const httpOptions = {
      'headers': headers
    };
    return this.http.post<any>(`${environment.swaggs}${'/user'}`,data,httpOptions)
    .pipe(map((res:any) =>{return res}))
  }
  otpGen(data:any){

    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');

  const httpOptions = {
    'headers': headers
  };
  return this.http.post<any>(`${environment.swaggs}${'/otp'}`,data,httpOptions)
  .pipe(map((res:any)=>{return res}))
  }
  isLoggedIn()
  {
    return of(true).pipe(delay(100));

  }
  hasPermissions()
  {
    return of(true)
  }
}
