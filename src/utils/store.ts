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