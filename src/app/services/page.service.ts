import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Injectable } from '@angular/core';

@Injectable()
export class PageService {

  constructor(private http: Http) { }

  public pagesBS = new BehaviorSubject<string>(null);

}
