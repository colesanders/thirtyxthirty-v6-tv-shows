import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Login } from '@thirty/api-interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SnackBarService } from './snack-bar.service';

export const BASE_URL = 'https://thirtyxthirty-lessons.herokuapp.com/logins';

export const autoLogin: Login = {
  id: null,
  username: "",
  password: "",
  logged_in: false,
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser: Login = autoLogin;
  
  constructor(private http: HttpClient, private snackBarService: SnackBarService,
    private router: Router) {
    }

  autoLogin(){
    this.currentUser = autoLogin;

    this.validateLoginAttempt(autoLogin);
  }
  
  validateLoginAttempt(login: Login){
   this.getLogins()
    .pipe( 
      map((arr)=>{
        for(const user of arr){
          if(user.username === login.username && user.password === login.password){
            this.currentUser = {...user};
            this.currentUser.logged_in = true;
            return true;
          } else if(user.logged_in){
            this.currentUser = {...user};
            return true;
          }
        }
        return false;
      })
    )
    .subscribe((valid)=>{
      if(valid){
        this.setLoginState(true, '/tvshow','Logged In!');
      } else {
        this.snackBarService.openSnackBar("Invalid Login Credentials","Close",2000);
      }
    });
    
  }

  logout():void{
    this.setLoginState(false, '/login', 'Logged Out!');
  }

  setLoginState(state: boolean, destination: string, message: string){
    this.currentUser.logged_in = state;

    this.updateLogin(this.currentUser)
    .subscribe((user: Login)=>{
      this.currentUser.logged_in = state;
      this.router.navigate([destination]);
      this.snackBarService.openSnackBar(message,"Close",2000);
    });
  }

  getLogins(): Observable<[Login]> {
    return this.http.get<[Login]>(BASE_URL);
  }

  deleteLogin(login: Login) {
    return this.http.delete(BASE_URL + "/" + login.id);
  }

  createLogin(login: Login) {
    return this.http.post(BASE_URL, login);
  }

  updateLogin(login: Login){
    return this.http.put(BASE_URL + "/" + login.id, login);
  }
}
