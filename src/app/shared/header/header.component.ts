import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Store } from 'src/app/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthenticationService, private store: Store) { }

  user: any = null;

  ngOnInit(): void {
    this.store.select('user').subscribe((user) => {
      this.user = user;
    })
  }

  logout() {
    this.authService.logout();
  }

}
