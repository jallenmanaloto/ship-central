import { Vessel } from '@prisma/client'
import { create } from 'zustand'
import dayjs, { Dayjs } from 'dayjs'
import { lime } from '@mui/material/colors'

/** START OF DRAWER STORE */
type ToggleDrawer = {
  display: boolean,
  toggleDrawer: () => void
}
export const useDrawerStore = create<ToggleDrawer>((set) => ({
  display: true,
  toggleDrawer: () => set((state) => ({ display: !state.display }))
}))

/** END OF DRAWER STORE */


/** START OF VESSEL STORE */
type VesselName = {
  vesselName: string | null,
  projectVesselName: string | null,
  setVesselName: (vesselName: string | null) => void,
  setProjectVesselName: (projectVesselName: string) => void
}

export const useVesselNameStore = create<VesselName>((set) => ({
  vesselName: null,
  projectVesselName: null,
  setVesselName: (vesselName: string | null) => set({ vesselName: vesselName }),
  setProjectVesselName: (projectVesselName: string) => set({ projectVesselName: projectVesselName }),
}))

type VesselList = {
  vesselList: []
  setVesselList: (vesselList: any) => void
}

export const useVesselListStore = create<VesselList>((set) => ({
  vesselList: [],
  setVesselList: (vesselList: any) => set({ vesselList: vesselList }),
}))

type VesselStore = {
  vesselName: string | null
  projectVesselname: string | null
  page: number
  limit: number
  setVesselname: (vesselName: string | null) => void
  setProjectVesselName: (projectVesselName: string | null) => void
  setVesselPage: (page: number) => void
  setVesselLimit: (limit: number) => void
}

export const useVesselStore = create<VesselStore>((set) => ({
  vesselName: null,
  projectVesselname: null,
  page: 1,
  limit: 6,
  setVesselname: (vesselName: string | null) => set({ vesselName: vesselName }),
  setProjectVesselName: (projectVesselName: string | null) => set({ projectVesselname: projectVesselName }),
  setVesselPage: (page: number) => set({ page: page }),
  setVesselLimit: (limit: number) => set({ limit: limit })
}))
/** END OF VESSEL STORE */


/** START OF PROJECT STORE */
type CreateProject = {
  chosenVessel: string
  chosenVesselId: string | null
  projectStartDate: any
  projectEndDate: any
  startDateSearch: string | null
  endDateSearch: string | null
  page: number
  limit: number
  setChosenVessel: (chosenVessel: string) => void
  setChosenVesselId: (chosenVesselId: string) => void
  setProjectStartDate: (projectDate: any) => void
  setProjectEndDate: (projectDate: any) => void
  setStartDateSearch: (startDateSearch: string | null) => void
  setEndDateSearch: (startDateSearch: string | null) => void
  setProjectPage: (page: number) => void
  setProjectLimit: (limit: number) => void
}

export const useProjectStore = create<CreateProject>((set) => ({
  chosenVessel: '',
  chosenVesselId: null,
  projectStartDate: '',
  projectEndDate: '',
  startDateSearch: null,
  endDateSearch: null,
  page: 1,
  limit: 6,
  setChosenVessel: (vessel: string) => set({ chosenVessel: vessel }),
  setChosenVesselId: (chosenVesselId: string) => set({ chosenVesselId: chosenVesselId }),
  setProjectStartDate: (projectStartDate: any) => set({ projectStartDate: projectStartDate }),
  setProjectEndDate: (projectEndDate: any) => set({ projectEndDate: projectEndDate }),
  setStartDateSearch: (startDateSearch: string | null) => set({ startDateSearch: startDateSearch }),
  setEndDateSearch: (endDateSearch: string | null) => set({ endDateSearch: endDateSearch }),
  setProjectPage: (page: number) => set({ page: page }),
  setProjectLimit: (limit: number) => set({ limit: limit })
}))

/** END OF VESSEL STORE */