import ResponsiveDrawer from "./ResponsiveDrawer.tsx";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const HomeKids = () => {
  return (
    <ResponsiveDrawer>
      <div className="flex items-center justify-between w-full">
        <img src="/kid_teaching.svg" alt="illustration" className="w-[50%]" />
        <div className="w-[50%]">
          <Typography fontSize="1.2rem" fontWeight="bolder" className="text-blue-700">
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
