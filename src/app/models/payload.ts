export interface SecondStagePayload {
    payload_id: string;
        norad_id: number[];
        reused: boolean;
        customers: string[];
        nationality: string;
        manufacturer: string;
        payload_type: string;
        payload_mass_kg: number;
        payload_mass_lbs: number;
        orbit: string;
        orbit_params: {
            reference_system: string;
            regime: string;
            longitude: number;
            semi_major_axis_km: number;
            eccentricity: number;
            periapsis_km: number;
            apoapsis_km: number;
            inclination_deg: number;
            period_min: number;
            lifespan_years: number;
            epoch: string;
            mean_motion: number;
            raan: number;
            arg_of_pericenter: number;
            mean_anomaly: number
        };
}
