import { Links } from './link';
import { Core } from './core';
import { SecondStagePayload } from './payload';

export interface LaunchDetail {
    flight_number: number;
    mission_name: string;
    mission_id: string[];
    upcoming: boolean;
    launch_year: string;
    launch_date_unix: Date;
    launch_date_utc: string;
    launch_date_local: string;
    is_tentative: boolean;
    tentative_max_precision: string;
    tbd: boolean;
    launch_window: number;
    rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: {
        cores: Core[];
    };
    second_stage: {
        block: number;
        payloads: SecondStagePayload[]
    };
    fairings: {
        reused: boolean;
        recovery_attempt: boolean;
        recovered: boolean;
        ship: null
    }
    };
    ships: string[];
    telemetry: {
    flight_club: string
    };
    launch_site: {
        site_id: string;
        site_name: string;
        site_name_long: string;
    };
    launch_success: boolean;
    launch_failure_details: {
        time: number;
        altitude: number;
        reason: string;
    };
    links: Links;
    details: string;
    static_fire_date_utc: string;
    static_fire_date_unix: Date;
    timeline: {
        webcast_liftoff: number
    };
    crew: any;
}