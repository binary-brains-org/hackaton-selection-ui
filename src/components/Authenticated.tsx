import { PropsWithChildren, useEffect, useState } from "react";
import { getUser } from "../api";
import local from "../core/local.ts";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading/Loading.tsx";

const Authenticated = ({children}: PropsWithChildren) => {
  const [error, setError] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    const cr: Credential = local.getUser() as Credential;
    getUser(cr.id)
      .then(() => {
        setError(false);
      })
      .catch(() => {
        nav("/login");
      });
  })

  return error ? <Loading /> : children;
}

export default Authenticated;