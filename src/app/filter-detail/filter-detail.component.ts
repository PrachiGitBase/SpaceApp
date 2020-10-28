import { Component, OnInit, Output, EventEmitter, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LAUNCH_YEAR_FILTERS, SUCCESSFULL_LANDING_FILTERS, SUCCESSFULL_LAUNCH_FILTERS } from '../constantValues';
import { ButtonDetailComponent } from '../button-detail/button-detail.component';

@Component({
  selector: 'app-filter-detail',
  templateUrl: './filter-detail.component.html',
  styleUrls: ['./filter-detail.component.css']
})
export class FilterDetailComponent implements OnInit {

  @ViewChildren('yearBtn') yearBtnRef: QueryList<ButtonDetailComponent>;
  @ViewChildren('launchBtn') launchBtnRef: QueryList<ButtonDetailComponent>;
  @ViewChildren('landBtn') landBtnRef: QueryList<ButtonDetailComponent>;
  @Output() yearFilter: EventEmitter<{ [key: string]: string }> = new EventEmitter(null);
  @Output() launchSuccessFilter: EventEmitter<{ [key: string]: string }> = new EventEmitter(null);
  @Output() landSuccessFilter: EventEmitter<{ [key: string]: string }> = new EventEmitter(null);
  previousYearElement: HTMLElement;
  previousLaunchElement: HTMLElement;
  previousLandElement: HTMLElement;
  yearFilterOptions = LAUNCH_YEAR_FILTERS;
  launchFilterOptions = SUCCESSFULL_LAUNCH_FILTERS;
  landingFilterOptions = SUCCESSFULL_LANDING_FILTERS;
  searchParams = {} as { [key: string]: string };

  constructor(private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const landSuccess = this.activatedRoute.snapshot.queryParamMap.get('land_success');
    const launchSuccess = this.activatedRoute.snapshot.queryParamMap.get('launch_success');
    this.searchParams = {
      year: this.activatedRoute.snapshot.queryParamMap.get('launch_year'),
      launch: !launchSuccess ? null : launchSuccess === 'true' ? 'True' : 'False',
      land: !landSuccess ? null : landSuccess === 'true' ? 'True' : 'False'
    };
  }


  ngAfterViewInit() {
    if (this.searchParams && this.searchParams.year) {
      this.highlightFilters(this.searchParams, this.yearBtnRef.toArray(), 'year');
    }

    if (this.searchParams && this.searchParams.launch) {
      this.highlightFilters(this.searchParams, this.launchBtnRef.toArray(), 'launch');
    }

    if (this.searchParams && this.searchParams.land) {
      this.highlightFilters(this.searchParams, this.landBtnRef.toArray(), 'land');
    }

  }

  onYearFilterChange(val: {[key: string]: string}) {
    this.yearFilter.emit(val);
}

onLaunchFilterChange(val: {[key: string]: string}) {
    this.launchSuccessFilter.emit(val);
}

onLandingFilterChange(val: {[key: string]: string}) {
    this.landSuccessFilter.emit(val);
}


  onYearFilterOptionsClick(event) {
    const clickedElement: HTMLElement = event.target || event.srcElement;
    if (clickedElement.nodeName === 'BUTTON') {
      if (this.previousYearElement === clickedElement) {
        this.previousYearElement.classList.remove('active');
        this.previousYearElement = null;
        return;
      }
      if (this.previousYearElement) {
        this.previousYearElement.classList.remove('active');
      }
      const isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector('.active');
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      } else {
        clickedElement.className += ' active';
        this.previousYearElement = clickedElement;
      }
    }

  }

  onLaunchFilterOptionsClick(event) {
    const clickedElement: HTMLElement = event.target || event.srcElement;
    if (clickedElement.nodeName === 'BUTTON') {
      if (this.previousLaunchElement === clickedElement) {
        this.previousLaunchElement.classList.remove('active');
        this.previousLaunchElement = null;
        return;
      }
      if (this.previousLaunchElement) {
        this.previousLaunchElement.classList.remove('active');
      }
      const isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector('.active');
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      } else {
        clickedElement.className += ' active';
        this.previousLaunchElement = clickedElement;
      }
    }
  }

  onLandFilterOptionsClick(event) {
    const clickedElement: HTMLElement = event.target || event.srcElement;
    if (clickedElement.nodeName === 'BUTTON') {
      if (this.previousLandElement === clickedElement) {
        this.previousLandElement.classList.remove('active');
        this.previousLandElement = null;
        return;
      }
      if (this.previousLandElement) {
        this.previousLandElement.classList.remove('active');
      }
      const isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector('.active');
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      } else {
        clickedElement.className += ' active';
        this.previousLandElement = clickedElement;
      }
    }
  }

  highlightFilters(searchParams, eleRef, key) {
    for (const ele of eleRef) {
      if (ele.nativeElement.innerText === searchParams[key]) {
        ele.nativeElement.children[0].childNodes[0].className += ' active';
        if (key === 'year') {
          this.previousYearElement = ele.nativeElement.children[0].childNodes[0];
        }
        if (key === 'launch') {
          this.previousLaunchElement = ele.nativeElement.children[0].childNodes[0];
        }
        if (key === 'land') {
          this.previousLandElement = ele.nativeElement.children[0].childNodes[0];
        }
      }
    }
  }

}

