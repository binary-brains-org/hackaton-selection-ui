import { ReactNode } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface Props {
    text: string;
    icon: ReactNode;
}

const CListItem = ({ text, icon }: Props) => {
    return (
        <ListItem key={text} disablePadding>
            <ListItemButton>
                <ListItemIcon
                    sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.3rem",
                    }}
                >
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    );
};

export default CListItem;
