import ResponsiveDrawer from "./ResponsiveDrawer.tsx";
import Typography from "@mui/material/Typography";

const HomeParent = () => {
    return (
        <ResponsiveDrawer>
            <div className="flex justify-between w-full">
                <img src="/PARENT1.png" className="w-[35%]" />
                <div className="flex font-bold w-full">
                    <div className="w-full">
                        <Typography fontSize="1.2rem" fontWeight="bolder" className="text-blue-700">
                            Try to manage your wallet here
                        </Typography>
                        <div className="flex flex-row rounded-lg shadow-lg w-full">
                            <div className="flex flex-row w-full">
                                <div className="flex justify-center">
                                    <img className="w-60 h-auto object-cover" src="/public/PARENT2.png" alt="Remy Sharp"/>
                                </div>
                                <div className="flex flex-col">
                                    <p className="flex">Name</p>
                                    <label>Category</label>
                                    <div className="flex flex-row">
                                    <input type="checkbox" id="enabledCheckbox" className="form-checkbox text-green-500 h-5 w-5 mr-2"/>
                                        <label htmlFor="enabledCheckbox" className="text-gray-700">Enabled</label>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ResponsiveDrawer>
    );
};

export default HomeParent;
