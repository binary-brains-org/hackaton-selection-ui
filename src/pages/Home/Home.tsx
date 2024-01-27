import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading.tsx";
import { getUser } from "../../api";
import local from "../../core/local.ts";

const Home = () => {
  const nav = useNavigate();

  useEffect(() => {
    const d: string = (local.getUser() as Credential).id;
    getUser(d)
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
  }, []);
  return <Loading />;
};

export default Home;
