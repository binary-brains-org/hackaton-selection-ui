import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import HomeKids from "./HomeKids";

const Home = () => {
  const nav = useNavigate();

  // useEffect(() => {
  //   nav("/");
  // }, []);

  return <HomeKids />

  // return (
  //   <div className="full-view flex items-center justify-center">
  //     <div className="flex flex-col items-center justify-center gap-4">
  //       <CircularProgress />
  //       <span className="text-lg">Wait please...</span>
  //     </div>
  //   </div>
  // );
};

export default Home;
