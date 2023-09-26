import { create } from 'zustand'

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
  chosenVesselIdForCreate: string | null
  projectStartDate: any
  projectEndDate: any
  startDateSearch: string | null
  endDateSearch: string | null
  page: number
  limit: number
  setChosenVessel: (chosenVessel: string) => void
  setChosenVesselId: (chosenVesselId: string) => void
  setChosenVesselIdForCreate: (chosenVesselIdForCreate: string | null) => void
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
  chosenVesselIdForCreate: null,
  projectStartDate: '',
  projectEndDate: '',
  startDateSearch: null,
  endDateSearch: null,
  page: 1,
  limit: 6,
  setChosenVessel: (vessel: string) => set({ chosenVessel: vessel }),
  setChosenVesselId: (chosenVesselId: string) => set({ chosenVesselId: chosenVesselId }),
  setChosenVesselIdForCreate: (chosenVesselIdForCreate: string | null) => set({ chosenVesselIdForCreate: chosenVesselIdForCreate }),
  setProjectStartDate: (projectStartDate: any) => set({ projectStartDate: projectStartDate }),
  setProjectEndDate: (projectEndDate: any) => set({ projectEndDate: projectEndDate }),
  setStartDateSearch: (startDateSearch: string | null) => set({ startDateSearch: startDateSearch }),
  setEndDateSearch: (endDateSearch: string | null) => set({ endDateSearch: endDateSearch }),
  setProjectPage: (page: number) => set({ page: page }),
  setProjectLimit: (limit: number) => set({ limit: limit })
}))

/** END OF PROJECT STORE */


/** START OF LCT STORE */
type LctStore = {
  lctName: string | null
  lctTripName: string | null
  page: number
  tripPage: number
  limit: number
  tripLimit: number
  lctTripProject: string
  lctTripFromLct: string
  setLctName: (lctName: string | null) => void
  setLctTripName: (lctTripName: string | null) => void
  setLctPage: (page: number) => void
  setLctTripPage: (page: number) => void
  setLctlimit: (limit: number) => void
  setLctTriplimit: (limit: number) => void
  setLctTripProject: (lctTripProject: string) => void
  setLctTripFromLct: (lctTripFromLct: string) => void
}

export const useLctStore = create<LctStore>((set) => ({
  lctName: null,
  lctTripName: null,
  page: 1,
  tripPage: 1,
  limit: 6,
  tripLimit: 6,
  lctTripProject: '',
  lctTripFromLct: '',
  setLctName: (lctName: string | null) => set({ lctName: lctName }),
  setLctTripName: (lctTripName: string | null) => set({ lctTripName: lctTripName }),
  setLctPage: (page: number) => set({ page: page }),
  setLctTripPage: (tripPage: number) => set({ tripPage: tripPage }),
  setLctlimit: (limit: number) => set({ limit: limit }),
  setLctTriplimit: (tripLimit: number) => set({ tripLimit: tripLimit }),
  setLctTripProject: (lctTripProject: string) => set({ lctTripProject: lctTripProject }),
  setLctTripFromLct: (lctTripFromLct: string) => set({ lctTripFromLct: lctTripFromLct })
}))
/** END OF LCT STORE */


/** START OF DAILY LOADING STORE */
type DailyLoadingStore = {
  dailyLoadingProjectId: string | null
  page: number
  limit: number
  setDailyLoadingProjectId: (projectId: string | null) => void
  setPage: (page: number) => void
  setLimit: (limit: number) => void
}

export const useDailyLoadingStore = create<DailyLoadingStore>((set) => ({
  dailyLoadingProjectId: null,
  page: 1,
  limit: 6,
  setDailyLoadingProjectId: (projectId: string | null) => set({ dailyLoadingProjectId: projectId }),
  setPage: (page: number) => set({ page: page }),
  setLimit: (limit: number) => set({ limit: limit })
}))
/** END OF DAILY LOADING STORE */