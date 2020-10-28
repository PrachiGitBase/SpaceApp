import { Component, OnInit,Input } from '@angular/core';
import { LaunchDetail } from '../models/launchDetail';
@Component({
  selector: 'app-rocket-detail',
  templateUrl: './rocket-detail.component.html',
  styleUrls: ['./rocket-detail.component.css']
})
export class RocketDetailComponent implements OnInit {

  @Input() launchDetail: LaunchDetail;
  constructor() { }

  ngOnInit(): void {
  }

}
