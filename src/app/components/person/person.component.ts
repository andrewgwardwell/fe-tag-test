import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[app-person]',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonComponent implements OnInit {
  @Input() person: any;
  public expanded = false;
  constructor() { }

  ngOnInit() {
  }

}
