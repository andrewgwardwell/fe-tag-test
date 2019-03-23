import { Component, OnInit } from '@angular/core';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'fe-tag-test'
  public people = [];
  constructor(private peopleService: PeopleService){}

  ngOnInit(){
    this.peopleService.getPeople().subscribe((response: any) => {
      console.log(response);
      this.people = response.results;
    }, (error: any) => {
      // error handling here
    });
  }
}
