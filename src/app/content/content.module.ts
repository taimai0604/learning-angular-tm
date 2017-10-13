import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { GuardContentGuard } from './guard-content.guard';
import { HomeComponent } from './home/home.component';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    ContentRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    Page1Component,
    Page2Component,
    Page3Component,
    HomeComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent
  ],
  providers: [GuardContentGuard],
  exports : [Page1Component]
})
export class ContentModule { }
