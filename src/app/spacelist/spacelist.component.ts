import { Component, OnInit } from '@angular/core';
import{SpaceListServiceService} from '../space-list-service.service';

@Component({
  selector: 'app-spacelist',
  templateUrl: './spacelist.component.html',
  styleUrls: ['./spacelist.component.css']
})
export class SpacelistComponent implements OnInit {

  spaceDetailArr :any= [];
  newSpaceListArr : any = [];
  launchYearList :any=[];
  successfulLaunchList:any=[];
  successfulLanding : any = [];
  successYearFilterList:any=[];
  filterApply : boolean ;
  withoutfilterApply: boolean;
  previousEvent : any;

  constructor(private space :SpaceListServiceService) { }

  ngOnInit(): void {

    this.getSpaceDetails();

    this.launchYearList =[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];

    this.successfulLaunchList = ["True", "False"];

    this.successfulLanding =["True", "False"];

    this.withoutfilterApply = true;
    this.filterApply = false;

  }

  getSpaceDetails(){

    this.spaceDetailArr = this.space.getSpaceLaunchesList();
    this.spaceDetailArr.subscribe((data)=>{

      this.newSpaceListArr = data;
      console.log(this.newSpaceListArr);
    })
  }

  selectLaunchYear(event:any){
    //this.previousEvent = event.target
    //event.target.style.backgroundColor = "#008000";
    this.space.getSpaceSuccessAll("","",event.target.value).subscribe((data)=>{
      this.successYearFilterList = data;
      this.filterApply = true;
      this.withoutfilterApply = false;
    })
  }

  selectLaunchland(event:any){
 
    this.space.getSpaceSuccessLaunchLandfilter("",event.target.value).subscribe((data)=>{
    
      this.successYearFilterList = data;
      this.filterApply = true;
      this.withoutfilterApply = false;

    })
  }

  selectLaunchSuccess(event:any){

    this.space.getSpaceSuccessfilter(event.target.value).subscribe((data)=>{
      this.successYearFilterList = data;
      this.filterApply = true;
      this.withoutfilterApply = false;

    })
  }

}
