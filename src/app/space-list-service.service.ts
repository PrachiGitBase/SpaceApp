import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceListServiceService {

  constructor(private http: HttpClient) { }

  url = "https://api.spaceXdata.com/v3/launches?limit=100";

  getSpaceLaunchesList() {

    return this.http.get(this.url);
  }

  getSpaceSuccessfilter(successFilterVal) {

    let lowercaseFilter = successFilterVal.toLowerCase();
    let successfilterUrl = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=" + lowercaseFilter;

    return this.http.get(successfilterUrl);
  }

  getSpaceSuccessLaunchLandfilter(successFilterVal, successLandVal) {
    
    let lowercaseLand = successLandVal.toLowerCase();
    let lowercaseFilter = successFilterVal.toLowerCase();
    let successfilterlandUrl = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=" + lowercaseFilter + "&land_success=" + lowercaseLand;

    return this.http.get(successfilterlandUrl);

  }


  getSpaceSuccessAll(successFilterVal, successLandVal, launchYear) {

    let lowercaseLand = successLandVal.toLowerCase();
    let lowercaseFilter = successFilterVal.toLowerCase();

    let successfilterlandYearUrl = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=" + lowercaseFilter + "&land_success=" + lowercaseLand + "&launch_year=" + launchYear;

    return this.http.get(successfilterlandYearUrl);

  }

}
