import { useSelector } from "react-redux";

const useProfileInfo = () => {
  
  const getProfile = useSelector((state: any) => state.profile);

  return { ...getProfile };
};

export default useProfileInfo;