import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeopleService {
  randoUrl = 'https://randomuser.me/api/?results=10';

  constructor(private http: HttpClient) { 
      
  }

  getPeople() {
    return this.http.get(this.randoUrl);
  }
}
