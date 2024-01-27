import { PropsWithChildren, useEffect, useState } from "react";
import { Avatar, Box, styled } from "@mui/material";
import { MdAttachMoney } from "react-icons/md";
import AppLogo from "./AppLogo.tsx";
import { getWallet, Wallet } from "../api";
import local from "../core/local.ts";
import DialogError from "./DialogError.tsx";

const HeaderBase = ({ children }: PropsWithChildren) => {
  const [currentWallet, setCurrentWallet] = useState<Wallet>({});
  const [Error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getWallet((local.getUser() as Credential).id)
      .then(setCurrentWallet)
      .catch(setError);
  }, []);

  return (
    <Header>
      <AppLogo />

      {children}

      <Box display="flex" gap="1rem" alignItems="center">
        <p className="flex items-center text-xl">
          <span>{currentWallet?.e_money || 0}</span>
          <MdAttachMoney className="text-2xl" />
        </p>

        <button className="flex gap-1.5">
          <div className="flex flex-col">
            <span className="text-lg leading-tight font-semibold">
              Firstname
            </span>
            <span className="text-sm leading-tight text-end text-gray-500">
              Lastname
            </span>
          </div>
          <Avatar alt="profile here" src="">
            P
          </Avatar>
        </button>
      </Box>

      {Error ? DialogError(Error) : null}
    </Header>
  );
};

const Header = styled("header")({
  width: "100%",
  display: "flex",
  padding: ".8rem",
  justifyContent: "space-between",
});
export default HeaderBase;
