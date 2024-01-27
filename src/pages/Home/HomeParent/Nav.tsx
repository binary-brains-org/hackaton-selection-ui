import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, matchPath, useLocation } from "react-router-dom";

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  const routeMatch = useRouteMatch(["/home/parent", "/drafts", "/trash"]);
  const currentTab = routeMatch?.pattern?.path;
  return (
    <Tabs value={currentTab}>
      <Tab
        label="My children"
        value="/home/parent"
        to="/home/parent"
        component={Link}
      />
      <Tab label="Deposite" value="/drafts" to="/drafts" component={Link} />
      <Tab label="Transfer" value="/trash" to="/trash" component={Link} />
    </Tabs>
  );
}

const Nav = () => {
  return <MyTabs />;
};

export default Nav;
