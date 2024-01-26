import ResponsiveDrawer from "./ResponsiveDrawer.tsx";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const HomeKids = () => {
  return (
    <ResponsiveDrawer>
      <div className="h-[20rem] flex items-center justify-between w-full">
        <img src="/books.png" alt="illustration" className="w-[50%]" />
        <div className="w-[50%] text-center gap-2 flex flex-col">
          <Typography fontSize="1.5rem" fontWeight="bolder" className="text-gray-900">
            Try to manage your wallet here
          </Typography>
          <div>
            <Button variant="outlined">Request more money</Button>
          </div>
        </div>
      </div>
    </ResponsiveDrawer>
  );
};

export default HomeKids;
