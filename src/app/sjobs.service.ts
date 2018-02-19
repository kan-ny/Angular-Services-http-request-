import { Injectable } from '@angular/core';

import {Http, Response} from "@angular/http";

 import {Observable} from "rxjs/Observable";
 import "rxjs/Rx";
 
 import {Ijobs} from "./ijobs";
@Injectable()
export class SjobsService {

  private _postsURL = "https://my-json-server.typicode.com/kan-ny/ajshrr/jobs/";

  constructor(private http: Http) { }
  getPosts(): Observable<Ijobs[]> {
    return this.http
        .get(this._postsURL)
        .map((response: Response) => {
            return <Ijobs[]>response.json();
        })
        .catch(this.handleError);
}

private handleError(error: Response) {
    return Observable.throw(error.statusText);
}
}