import React from "react";
import { Avatar, Typography, Button} from "@mui/material";
import { FaArchive } from "react-icons/fa";
import { IconType } from "react-icons";
import { IoLogOutOutline } from "react-icons/io5";

export function UserInformation() : React.ReactElement{
  return(
    <div className="border-[--color-orange] border-2 w-[800px] h-[600px] bg-white flex flex-col rounded-lg overflow-hidden border-">
        <div className="h-2/5 bg-[--color-grey] grid px-[3em]">
            <div className="items-center flex row">
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 180, height: 180}}
            />
            <div className="h-full w-full grid items-center p-5">
                <div className="w-[13em] flex-wrap">
                    <p className="text-[1.2em]">
                        Robert Niaina Franco
                    </p>
                </div>
            </div>
            </div>
        </div>
        <div className="h-3/5 flex-wrap flex-row flex overflow-auto">
            <SquareButton Icon={FaArchive} >
              <>Parameter</>
            </SquareButton>
            <SquareButton Icon={IoLogOutOutline} >
              <>deconnecter</>
            </SquareButton>
        </div>
    </div>
  )
}

function SquareButton(props : {children:React.ReactElement | undefined,Icon: IconType, onClick:Function | undefined}){
  const { children, onClick, Icon} = props;
  return(
    <div className="w-3/6 h-[150px] p-1 ">
      <Button className="w-full h-full" variant="outlined" component="label" onClick={onClick} >
        <span>
          <span className="w-full p-3 flex justify-center">
            <Icon className="text-[20px]"/>
          </span>
          <span>
            {children}
          </span>
        </span>
      </Button>
    </div>
  )
}
