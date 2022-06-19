// SCSS | My
// __________________________________________________
// import './Home.page.scss';

import { useSelector } from "react-redux";

const HomePage = () => {
  const {email} = useSelector((state: any) => state.user);
  
  return (
    <>
      Home { email }
    </>
  );
};

export default HomePage;