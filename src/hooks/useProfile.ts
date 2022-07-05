import { useSelector } from "react-redux";

const useProfile = () => {
  
  const getProfile = useSelector((state: any) => state.profile);

  return { ...getProfile };
};

export default useProfile;