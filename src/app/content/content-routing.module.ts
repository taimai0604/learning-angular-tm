import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { ContentComponent } from './content.component';
import { RegisterComponent } from './register/register.component';
import { GuardContentGuard } from './guard-content.guard';

const routes: Routes = [
  {
      path: '', component: ContentComponent,
      children: [
        {
          path: '', component: HomeComponent
        },
        {
          path: 'page1', component: Page1Component
        },
        {
          path: 'page2', component: Page2Component
        },
        {
          path: 'register', component: RegisterComponent
        },
        {
          path: 'page3', component: Page3Component,
          canActivate: [GuardContentGuard]
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
