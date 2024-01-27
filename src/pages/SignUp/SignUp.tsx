import React, { useState } from "react";
import HorizontalLinearAlternativeLabelStepper from "./Stepper"; "./Stepper";
import { PageOne } from "./PageOne";
import { PageTwo } from "./PageTwo";
import { PageThree } from "./PageThree";
import { Button } from "@mui/material";

interface ItemData {
  id: string;
  firstname: string;
  lastname: string;
  birthdate: EpochTimeStamp;
  role: "Parent" | "Child";
  sex: "M" | "F";
  age_category: "Kid" | "Teen" | "Adult";
  password: string;
  age: number;
  cin: string;
}


export default function SignUp() : React.ReactElement{
  const [active,setActive] = useState(0);
  return(
    <div className="full-view flex max-w-5/6 justify-center p-4 border-1">
        <div className="flex flex-col w-4/5 justify-center">
            <div className="shadow-xl p-4">
              <HorizontalLinearAlternativeLabelStepper activeStep={active}/>
            </div>
            <div className="w-full py-4 relative">
                {active === 0 ? <PageOne /> : active == 1 ? <PageTwo /> : <PageThree />}
                <div className="p-4">
                    <Button variant="outlined" disabled={active==0} className="must-absolute left-4" onClick={()=>{setActive(active == 0 ? 0:active-1)}}>Previous</Button>
                    <Button variant="contained" className="must-absolute right-4" onClick={()=>(setActive(active >= 2 ? 2:active+2))}>next</Button>
                </div>
            </div>
        </div>
    </div>
  )
}