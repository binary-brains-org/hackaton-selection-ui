import { PropsWithChildren } from "react";
import { Avatar, Box, styled } from "@mui/material";
import { MdAttachMoney } from "react-icons/md";
import AppLogo from "./AppLogo.tsx";
import MyModal from "./Modal/Modal.tsx";
import { UserInformation } from "./Modal/Content.tsx";
import { useState } from "react"

const HeaderBase = ({ children }: PropsWithChildren) => {
  const [open, setIsOpen] = useState(false);
  
  return (
    <Header>
      <AppLogo />

      {children}
      <MyModal isOpen={open} setOpen={setIsOpen}>
        <UserInformation />
      </MyModal>
      <Box display="flex" gap="1rem" alignItems="center">
        <p className="flex items-center text-xl">
          <span>0.1</span>
          <MdAttachMoney className="text-2xl" />
        </p>

        <button className="flex gap-1.5" onClick={()=>{setIsOpen(true)}}>
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
