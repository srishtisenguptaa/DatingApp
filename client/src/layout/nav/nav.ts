import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected accountService = inject(AccountService);
  protected creds:any ={}
  // protected LoggedIn = signal(false);

  login (){
    this.accountService.login(this.creds).subscribe({

      next: result => {
       // this.LoggedIn.set(true);
        console.log('Login successful:', result);
        this.creds = {}; // Clear credentials after successful login
      },
      error: (error) => alert('Login failed: ' + error.message),
    });
    
  }

  logout() {
    this.accountService.logout();
     //this.LoggedIn.set(false);
    
  }
}
