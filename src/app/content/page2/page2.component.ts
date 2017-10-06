import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public login(event) {
    event.preventDefault();
    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
    setTimeout(() => {
      this.router.navigate(['/page3']);
    }, 2000);
  }
}
