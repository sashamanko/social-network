import { useDispatch, useSelector } from "react-redux";
import { fetchUpdateUser } from "../redux/user/asyncActions";

// const getUserId = async (email: string) => await (await getDocs(collection( db, `users`))).docs.find(doc => doc.data().email === email)?.data().id;

const useAuth = () => {
  const getUser = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const updateUser = (params: any) => {
    dispatch(fetchUpdateUser(params));
  };

  return {
    ...getUser,
    updateUser,
  };
};

export default useAuth;