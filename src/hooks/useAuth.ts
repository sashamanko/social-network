import { useSelector } from "react-redux";

const useAuth = () => {
  const {email} = useSelector((state: any) => state.user);

  return {
    isAuth: !!email,
    email
  };
};

export default useAuth;