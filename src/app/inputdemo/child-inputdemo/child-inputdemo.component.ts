import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { all } from 'q';

@Component({
  selector: 'app-child-inputdemo',
  templateUrl: './child-inputdemo.component.html',
  styleUrls: ['./child-inputdemo.component.css']
})
export class ChildInputdemoComponent implements OnInit {

   selectedRadioButtonValue : string = 'All';

  @Output()
    countRadioButtonSelectionChanged : EventEmitter<string> = new EventEmitter<string>();
    @Input() all : number;
    @Input() male : number;
    @Input() female : number;

    onRadioButtonSelectionChange(){
      this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    }


  constructor() { }

  ngOnInit() {
  }

}
