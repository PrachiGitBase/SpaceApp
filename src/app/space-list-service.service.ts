import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LaunchDetail } from './models/launchDetail';

/**
 * Provider for performing API requests
 */
@Injectable({
  providedIn: 'root'
})
export class SpaceListServiceService {
   
    baseUrl = 'https://api.spacexdata.com/v3/launches';

   
    constructor(private readonly http: HttpClient) { }

    
    private readonly handleError = (response: HttpErrorResponse): Observable<never> => {
        const apiError = { ...response };
        return throwError(apiError);
    }

    getLaunches(filters = {}, limit = 100): Observable<LaunchDetail[]> {
        const params = this.createQueryParams({
            ...filters,
            limit,
        });
        return this.http.get<LaunchDetail[]>(`${this.baseUrl}`, { params }).pipe(catchError(this.handleError));
    }

    private createQueryParams(params: { [key: string]: string | number | boolean }): HttpParams {
        let httpParams = new HttpParams();
        for (const [name, value] of Object.entries(params)) {
            try {
                const stringValue = value.toString();
                if (stringValue !== '') {
                    httpParams = httpParams.append(name, stringValue);
                }
            } catch {}
        }
        return httpParams;
    }
}