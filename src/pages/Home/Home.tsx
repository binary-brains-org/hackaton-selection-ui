import Loading from "../../components/Loading/Loading.tsx";
import { useEffect } from "react";
import { getUser } from "../../api";
import DialogError from "../../components/DialogError.tsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  const login = () => {
    getUser("")
      .then((v) => {
        if (v === "KID") {
          nav("/home/kid/:...");
        }else {
          nav("/home/parent")
        }
      })
      .catch(DialogError);
  };

  useEffect(login, []);
  return <Loading />;
};

export default Home;
