import Button from "@mui/material/Button";
import { FaMoneyBillTransfer, FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import RowKid from "./RowKid.tsx";
import HeaderBase from "../../../components/HeaderBase.tsx";
import Authenticated from "../../../components/Authenticated.tsx";
import Authorized from "../../../components/Authorized.tsx";
import { getChildOfParents, User } from "../../../api";
import local from "../../../core/local.ts";
import DialogError from "../../../components/DialogError.tsx";

const HomeParent = () => {
  const [children, setChildren] = useState<User[]>([]);
  const [Error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getChildOfParents((local.getUser() as Credential).id)
      .then(setChildren)
      .catch(setError);
  });

  return (
    <Authenticated>
      <Authorized role={["parent", "adult"]}>
        <div className="full-view flex flex-col">
          <HeaderBase />

          <div className="w-full flex flex-col p-2 rounded-2xl h-full">
            <section className="p-3 w-full gap-3 flex justify-around">
              <Button sx={{ padding: "2rem" }} variant="outlined">
                <div>
                <span className="flex-all-center flex-col">
                  <FaPlus className="text-[3rem]" />
                  <span>Deposite</span>
                </span>
                  <span>add some money in your wallet</span>
                </div>
              </Button>

              <Button sx={{ padding: "2rem" }} variant="outlined">
                <div className="flex-all-center flex-col">
                <span className="text-center">
                  <FaMoneyBillTransfer className="text-[3rem]" />
                </span>
                  <span>Transfer some money to your child(ren)</span>
                </div>
              </Button>
            </section>

            <section className="p-3 w-full gap-3 flex flex-col">
              <div className="px-2 text-xl">My children</div>
              {
                children.map(v => <RowKid data={v} />)
              }
            </section>
          </div>
        </div>
      </Authorized>

      {Error ? DialogError(Error) : null}
    </Authenticated>
  );
};

export default HomeParent;
