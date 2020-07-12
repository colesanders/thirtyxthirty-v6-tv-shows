import { Component, OnInit} from '@angular/core';
import { LoginService } from '@thirty/core-data'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'thirty-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username : [''],
      password : [''],
    })
  }

  validateLogin(){
    const login = this.loginForm.value;
    login.id = null;
    login.logged_in = null;

    this.loginService.validateLoginAttempt(login);

    this.loginForm.reset();
    
  }

}
