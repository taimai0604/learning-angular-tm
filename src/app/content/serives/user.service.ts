import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Person } from '../models/person';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(public http: HttpClient) { }
  getPosts() {
    // return this.http.get('https://jsonplaceholder.typicode.com/posts').map(
    //   (response) => response.json()
    // );
  }

  checkLogin(user: any) {
    this.http.post('http://localhost:3000/api/Users/login', {
      body: user,
      Headers: {
        'Content-Type': 'application/json'
      }
    })
      .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured');
      }
      );
  }
}
