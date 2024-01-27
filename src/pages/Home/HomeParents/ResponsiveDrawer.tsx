import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { PropsWithChildren } from "react";
import HeaderKids from "./HeaderParent.tsx";
import { IoWallet } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import CListItem from "./CListItem.tsx";
import { MdOutlineAttachMoney } from "react-icons/md";
import { GiEyeTarget } from "react-icons/gi";

const drawerWidth = 240;
export default function ResponsiveDrawer({ children }: PropsWithChildren) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div className="h-full flex flex-col justify-between">
            <div>
                <Toolbar>
                    <Link to="/" className="flex gap-2 items-center text-blue-600">
                        <IoWallet className="text-3xl" />
                        <span className="text-xl font-bold">VisualPayKids</span>
                    </Link>
                </Toolbar>

                <List>
                    <CListItem text="Investment" icon={<MdOutlineAttachMoney />} />
                </List>
                <List>
                    <CListItem text="See my kids" icon={<GiEyeTarget />} />
                </List>
            </div>

            <List>
                <CListItem text="Logout" icon={<CiLogout />} />
            </List>
        </div>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    background: "none",
                }}
            >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: "none" } }}
                ></IconButton>
                <Typography variant="h6" height="100%" noWrap component="div">
                    <HeaderKids />
                </Typography>
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
