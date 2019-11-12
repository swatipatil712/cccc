import { Component, OnInit, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.css']
})
export class ChildDemoComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();
  fireEvent()
  {
    this.childEvent.emit(" Welcome to child class");
  }

  constructor() { }

  ngOnInit() {
  }

}
