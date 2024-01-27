import { PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import local from "../core/local.ts";
import { getUser } from "../api";
import Loading from "./Loading/Loading.tsx";

interface Props {
  role: string | string[];
}

const Authorized = ({children, role}: PropsWithChildren<Props>) => {
  const [error, setError] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    const cr: Credential = local.getUser() as Credential;
    getUser(cr.id)
      .then((value) => {
        if (!role.includes(value.role.toLowerCase())) {
          setError(true);
          nav("/login");
        }
      })
      .catch(() => {
        nav("/login");
      });
  })

  return error ? <Loading /> : children;
}

export default Authorized;