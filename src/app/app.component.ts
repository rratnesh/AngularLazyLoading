import { Component } from '@angular/core';
import { Store } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';
  show = false;

  constructor(private store: Store) {
  }

  ngOnInit() {
    // this.store.set('user', { name: 'Ratnesh' });
    this.store.set('profile', { address: 'India' });
  }
}
