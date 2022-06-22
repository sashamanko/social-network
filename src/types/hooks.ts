export interface IUseAuth {
  isAuth: boolean;
  email: string;
  displayName: string;
}

export interface IUseOutside {
  outsideRef: any;
  isShow: boolean;
  setIsShow: Function;
}