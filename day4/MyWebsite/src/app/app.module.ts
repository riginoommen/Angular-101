import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { HomeService } from './home/home.service'
import { HttpClientModule } from '@angular/common/http';
import { AlertDirective } from './alert.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    AlertDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
