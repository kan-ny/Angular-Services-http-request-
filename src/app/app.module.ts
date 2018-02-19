import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {SjobsService} from './sjobs.service';
import {Ijobs} from './ijobs';


import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {InterceptorModule} from './interceptor.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InterceptorModule,
    FormsModule,
    HttpModule
  ],
  providers: [SjobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
