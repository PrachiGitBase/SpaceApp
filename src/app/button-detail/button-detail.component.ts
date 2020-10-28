import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-detail',
  templateUrl: './button-detail.component.html',
  styleUrls: ['./button-detail.component.css']
})
export class ButtonDetailComponent {

  @Input() option: {[key: string]: string};
  @Output() yearFilter: EventEmitter<{[key: string]: string}> = new EventEmitter(null);
  @Output() launchSuccessFilter: EventEmitter<{[key: string]: string}> = new EventEmitter(null);
  @Output() landSuccessFilter: EventEmitter<{[key: string]: string}> = new EventEmitter(null);


  onClick(val: {[key: string]: string}) {
    if (val.name === 'year') {
        this.yearFilter.emit(val);
    }
    if (val.name === 'launch') {
        this.launchSuccessFilter.emit(val);
    }
    if (val.name === 'land') {
        this.landSuccessFilter.emit(val);
    }

}

}
