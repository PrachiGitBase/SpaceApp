import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Subject, Observable } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';

import { LaunchDetail } from '../models/launchDetail';
import { SpaceListServiceService } from '../space-list-service.service';
import { SearchParams } from '../searchParamConstant';

@Component({
  selector: 'app-spacelist',
  templateUrl: './spacelist.component.html',
  styleUrls: ['./spacelist.component.css']
})
export class SpacelistComponent implements OnInit, OnDestroy {
    private readonly destroy$ = new Subject<void>();
    @Input() launchList: LaunchDetail[];

    showSpinner = true;

    error = null;

    prevQueryParam = {
        launch_year: null,
        launch_success: null,
        land_success: null
    } as Params;

    constructor(
        private readonly spaceListService: SpaceListServiceService,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.activatedRoute.queryParams
            .pipe(switchMap((params: Params) => this.loadMissions(params)))
            .pipe(takeUntil(this.destroy$))
            .subscribe((data: LaunchDetail[]) => {
                this.launchList = data;
                this.showSpinner = false;
            },
            (err) => {
                this.showSpinner = false;
                this.error = err;
            }
            );
    }

    private loadMissions(filters?: Params): Observable<LaunchDetail[]> {
        this.showSpinner = true;
        this.prevQueryParam = { ...this.prevQueryParam, ...filters };
        return this.spaceListService.getLaunches(filters);
    }

    private navigate(route: any[], queryParams: { [key: string]: any }) {
        queryParams = this.remeberLastQuery(this.encodeQueryParam(queryParams));
        this.router.navigate(route, {
            relativeTo: this.activatedRoute,
            queryParams,
            queryParamsHandling: 'merge',
        });
    }

    private encodeQueryParam(params: { [key: string]: string }): { [key: string]: string } {
        const encodedQueryParams = {};
        if (params) {
            if (params.name === 'year' ) {
                encodedQueryParams[SearchParams.year] = params.value;
            }
            if (params.name === 'launch') {
                encodedQueryParams[SearchParams.launch] = params.value;
            }
            if (params.name === 'land') {
                encodedQueryParams[SearchParams.land] = params.value;
            }
        }
        return encodedQueryParams;
    }

    private remeberLastQuery(params: { [key: string]: string }): { [key: string]: string } {

        const updatedParam = { ...this.prevQueryParam, ...params };
        if (params.launch_year === this.prevQueryParam.launch_year) {
            updatedParam.launch_year = null;
            this.prevQueryParam.launch_year = null;
        } else {
            this.prevQueryParam.launch_year = updatedParam.launch_year;
        }

        if (params.launch_success === this.prevQueryParam.launch_success) {
            updatedParam.launch_success = null;
            this.prevQueryParam.launch_success = null;
        } else {
            this.prevQueryParam.launch_success = updatedParam.launch_success;
        }

        if (params.land_success === this.prevQueryParam.land_success) {
            updatedParam.land_success = null;
            this.prevQueryParam.land_success = null;
        } else {
            this.prevQueryParam.land_success = updatedParam.land_success;
        }
        return updatedParam;
    }

    onYearFilterChange(val: {[key: string]: string}) {
        this.navigate([], val);

    }

    onLaunchFilterChange(val: {[key: string]: string}) {
        this.navigate([], val);
    }

    onLandingFilterChange(val: {[key: string]: string}) {
        this.navigate([], val);
    }

    ngOnDestroy(){
        this.destroy$.next();
        this.destroy$.complete();
    }

}
