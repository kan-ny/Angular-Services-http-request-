import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';
import {SjobsService} from './sjobs.service';
import {Ijobs} from './ijobs';
import {OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _jobsArray: Ijobs[];

  constructor(private apiSerivce : SjobsService) {
  }
//calling method from services
  getPosts(): void {
      this.apiSerivce.getPosts()
          .subscribe(
              resultArray => this._jobsArray = resultArray,
              error => console.log("Error :: " + error)
          )
  }

  ngOnInit(): void {
      this.getPosts();
  }
}
