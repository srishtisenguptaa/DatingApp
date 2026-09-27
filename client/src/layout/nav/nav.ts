import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastService } from '../../core/services/toast-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected accountService = inject(AccountService);
  protected creds:any ={}
  private router = inject(Router);
  private toast = inject(ToastService);
  // protected LoggedIn = signal(false);
  
  login (){
    this.accountService.login(this.creds).subscribe({

      next: result => {
       // this.LoggedIn.set(true);
       this.router.navigateByUrl('/members');
       this.toast.success('Login successful');
        this.creds = {}; // Clear credentials after successful login
      },
      error: (error) => {
        this.toast.error(error.error);
      },
    });
    
  }

  logout() {
    this.accountService.logout();
     this.router.navigateByUrl('/');
     //this.LoggedIn.set(false);
    
  }
}
