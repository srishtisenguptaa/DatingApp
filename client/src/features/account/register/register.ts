import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds, User } from '../../../types/user';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private accountService = inject(AccountService);
  cancelRegister = output<boolean>();
  protected creds = {} as RegisterCreds;

  register() {
    this.accountService.register(this.creds).subscribe({
      next: result => {
        console.log('Registration successful:', result);
        this.cancelRegister.emit(false); // Close the registration form after successful registration
      },
      error: (error) => console.log('Registration failed: ' + error.message),
    });

  }
  cancel() {
    this.cancelRegister.emit(false);
    console.log('Registration cancelled');
    //this.creds = {} as RegisterCreds;
  }
}
