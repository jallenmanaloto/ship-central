import { Vessel } from '@prisma/client'
import { create } from 'zustand'
import dayjs, { Dayjs } from 'dayjs'
import { lime } from '@mui/material/colors'

type ToggleDrawer = {
  display: boolean,
  toggleDrawer: () => void
}
export const useDrawerStore = create<ToggleDrawer>((set) => ({
  display: true,
  toggleDrawer: () => set((state) => ({ display: !state.display }))
}))

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