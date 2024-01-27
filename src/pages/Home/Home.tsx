import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading.tsx";
import { Credentials, getUser } from "../../api";
import local from "../../core/local.ts";

const Home = () => {
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const d = (local.getUser() as Credentials);
      getUser(d.userId)
        .then(v => {
          if (v?.role?.toLowerCase() === "child") {
            nav("/home/kid");
          }else if(v?.role?.toLowerCase() === "parent") {
            nav("/home/parent");
          }else {
            nav("/login");
          }
        })
        .catch(() => {
          nav("/signup");
        })
    }, 1000)
  }, []);
  return <Loading />;
};

export default Home;
