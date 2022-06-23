// User slice
// __________________________________________________
export interface IUserInitialState {
  id: string | null
  uid: string | null
  email: string | null;
  displayName: string | null;
}

// Profile slice
// __________________________________________________
export interface IProfileInitialState {
  id: string | null,
  email: string | null,
  displayName: string | null,
  followers: number | null,
  subscribers: number | null,
  error: any | null
}