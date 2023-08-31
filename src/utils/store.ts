import { create } from 'zustand'

type ToggleDrawer = {
  display: boolean,
  toggleDrawer: (state: boolean) => void
}
export const useDrawerStore = create<ToggleDrawer>((set) => ({
  display: true,
  toggleDrawer: () => set((state) => ({ display: !state.display }))
}))