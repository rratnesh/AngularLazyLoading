import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.css']
})
export class Content1Component implements OnInit {

  value;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {

  }

  changeValue() {
    this.authService.sendUser(this.value);
  }
}
