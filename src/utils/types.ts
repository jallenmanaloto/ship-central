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