export type ProjDetails = {
  name: string
  projectStartDate: Date
  projectEndDate: Date
}[]

export type ProjDetail = {
  name: string
  projectStartDate: Date
  projectEndDate: Date
}

export type TVessel = {
  id: string
  name: string
  totalCargoLoad: number
  createdAt: string
  updatedAt?: string | null
}

export type ProjectProp = {
  vesselName: string;
  id: string;
  createdAt: string;
  updatedAt: string | null;
  laytimeDays: number;
  totalCargo: number;
  cargoRate: number;
  projectStartDate: string | null;
  projectEndDate: string | null;
  monitored: boolean;
  vesselId: string;
}

export interface IProject {
  vesselName: string | null
  id: string
  vesselId: string
  projectStartDate: string | null
  projectEndDate: string | null
  createdAt: string
  updatedAt: string | null
  laytimeDays: number
  totalCargo: number
  cargoRate: number
  monitored: boolean
}