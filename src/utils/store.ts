import { Vessel } from '@prisma/client'
import { create } from 'zustand'

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
  setVesselName: (vesselName: string) => void,
  setProjectVesselName: (projectVesselName: string) => void
}

export const useVesselNameStore = create<VesselName>((set) => ({
  vesselName: null,
  projectVesselName: null,
  setVesselName: (vesselName: string) => set({ vesselName: vesselName }),
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
  chosenVesselId: string
  projectStartDate: any
  projectEndDate: any
  setChosenVessel: (chosenVessel: string) => void
  setChosenVesselId: (chosenVesselId: string) => void
  setProjectStartDate: (projectDate: any) => void
  setProjectEndDate: (projectDate: any) => void
}

export const useCreateProjectStore = create<CreateProject>((set) => ({
  chosenVessel: '',
  chosenVesselId: '',
  projectStartDate: '',
  projectEndDate: '',
  setChosenVessel: (vessel: string) => set({ chosenVessel: vessel }),
  setChosenVesselId: (chosenVesselId: string) => set({ chosenVesselId: chosenVesselId }),
  setProjectStartDate: (projectStartDate: any) => set({ projectStartDate: projectStartDate }),
  setProjectEndDate: (projectEndDate: any) => set({ projectEndDate: projectEndDate })
}))