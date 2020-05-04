import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component implements OnInit {

  user: any;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      this.user = user;
    });
  }




}
