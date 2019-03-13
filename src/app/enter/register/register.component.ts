import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Users} from '../../models/Users';
import {InitService} from '../init.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: Users[] = [];

  constructor(private userService: InitService) { }

  ngOnInit() {
  }

  createUser(register: NgForm) {
    const user: Users = register.value;
    this.userService.createUser(user).subscribe((newUser) => {
      this.users.push(newUser);
    });
  }
}
