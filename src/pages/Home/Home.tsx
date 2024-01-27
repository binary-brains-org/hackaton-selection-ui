import Loading from "../../components/Loading/Loading.tsx";
import { useEffect, useState } from "react";
import { getUser } from "../../api";
import DialogError from "../../components/DialogError.tsx";
import { useNavigate } from "react-router-dom";
import HomeParent from "./HomeParent/index.tsx";


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
  return(
    <HomeParent />
  )
};

export default Home;
