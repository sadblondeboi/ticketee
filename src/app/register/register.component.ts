import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user/user';
import { UserFormGroup } from '../models/user/form.user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: User;
  public userFormGroup = new UserFormGroup();
  public formSubmitted: boolean;

  get jsonUser(): string {
    return JSON.stringify(this.user);
  }

  addUser(u: User): void {
    console.log('new user: ' + this.jsonUser);
  }

  submitForm(form: NgForm): void {
    this.formSubmitted = true;
    if (form.valid) {
      this.addUser(this.user);
      this.user = {
        id: 68,
        emailAdress: '',
        password: '',
        firstName: '',
        secondName: '',
        registrationDate: new Date(),
        isPremium: false,
        creditCards: []
      };
    }
  }

  ngOnInit(): void {
  }

}
