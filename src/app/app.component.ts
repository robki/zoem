import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'zm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  
})
export class AppComponent {
  title = 'zm';
  
  constructor(private auth: AuthService) {
    // Check for authentication and handle if hash present
    auth.handleAuth();
  }
}
