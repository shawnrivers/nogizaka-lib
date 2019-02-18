export enum CdsCurrentPage {
  Single = 'singles',
  Album = 'albums',
}

export enum CdType {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  T = 'T',
  L = 'Limited',
}

export enum SongType {
  None = 'none',
  Title = 'title',
  Coupling = 'coupling',
  Under = 'under',
  Unit = 'unit',
  Solo = 'solo',
  FirstGeneration = 'first generation',
  SecondGeneration = 'second generation',
  ThirdGeneration = 'third generation',
}

export enum FocusPerformersType {
  Center = 'center',
  Solo = 'solo',
  Unit = 'unit',
  None = '',
}

export enum FetchStatus {
  None,
  Rejected,
  Pending,
  Fulfilled,
}
