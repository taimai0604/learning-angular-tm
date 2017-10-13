import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../serives/user.service';
import { Person } from '../models/person';
import { HttpClient } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  person: any;
  constructor(private router: Router, private userService: UserService, private http: HttpClient) {
    this.person = {};
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/Users').subscribe(data => {
      console.log(data);
    });
  }

  public login(event, username, password) {
    this.person.username = username;
    this.person.password = password;
    event.preventDefault();
    console.log('====================================');
    console.log(this.person);
    this.userService.checkLogin(this.person);
    console.log('====================================');

    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
    setTimeout(() => {
      // this.router.navigate(['/page3']);
    }, 2000);
  }

  public register() {
    this.router.navigate(['/register']);
  }
}
