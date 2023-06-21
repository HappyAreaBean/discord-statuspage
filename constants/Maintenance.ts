import { StatusPagePageData, StatusPageIncidentData } from '../constants/Interfaces';

export interface StatusPageMaintenanceData {
    scheduled_maintenances: StatusPageIncidentData[];
    page: StatusPagePageData;
}

export type StatusPageMaintenanceImpactType =
    'none' |
    'maintenance';

export type StatusPageMaintenanceStatusType =
    'scheduled' |
    'in_progress' |
    'verifying' |
    'completed';
