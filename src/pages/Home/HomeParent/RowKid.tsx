import Button from "@mui/material/Button";
import { BsThreeDots } from "react-icons/bs";
import { User } from "../../../api";

interface Props {
  data: User;
}

const RowKid = ({data}: Props) => {
  return (
    <div className="rounded-lg h-fit w-full flex items-center justify-between bg-gray-100 px-1">
      <div className="flex items-center gap-2">
        <div className="h-[3rem] w-[3rem] flex items-center bg-gray-600 rounded-md">
          <img src="" alt="profile" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-center gap-1">
            <span className="text-xl">
              {data.firstname || "unknown firstname"}
            </span>
            <div className="text-xs p-1 rounded-md bg-[--color-grey] scale-[0.9]">
              {data.sex || "OTHER"}
            </div>
          </div>
          <span className="text-gray-700">
            {data.lastname || "unknown lastname"}
          </span>
        </div>
      </div>
      <div className="p-2 flex items-center gap-2">
        <div>{data.age || 0} years old</div>
        <Button sx={{ minWidth: 0, padding: "1rem" }}>
          <BsThreeDots />
        </Button>
      </div>
    </div>
  );
};

export default RowKid;
