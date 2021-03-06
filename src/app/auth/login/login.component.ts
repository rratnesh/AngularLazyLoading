import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Store } from 'src/app/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router, private store: Store) { }

  ngOnInit(): void {
    this.store.select('user').subscribe((res) => {
      console.log(res);
    })
    this.form = this.fb.group({
      username: [''],
      password: [''],
    })
  }

  submit() {
    this.authService.login(this.form.value);
  }

}
