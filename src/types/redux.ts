// User slice
// __________________________________________________
export interface IUserInitialState {
  id: string | null
  uid: string | null
  email: string | null;
  displayName: string | null;
  followers: any[];
  subscribers: any[];
  settings: {
    theme: 'dark' | 'white' | null
    color: 'dark-purple' | 'white' | null
  } | null,
  isAuth: boolean | null,
  status: -1 | 0 | 1 | null,
  error: any | null,
}

// Profile slice
// __________________________________________________
export interface IProfileInitialState {
  id: string | null,
  email: string | null,
  displayName: string | null,
  followers: any[],
  subscribers: any[],
  isSubscribe: boolean,
  status: -1 | 0 | 1 | null,
  error: any | null,
}