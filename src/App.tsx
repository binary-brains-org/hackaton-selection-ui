import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import HomeParent from "./pages/Home/HomeParent";
import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./pages/Login";
import DialogError from "./components/DialogError.tsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF8400",
      contrastText: "#000",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={Home} path="/home/kid" />
          <Route Component={HomeParent} path="/home/parent" />

          <Route Component={null} path="/view/parent/:user_id" />
          <Route Component={null} path="/view/kid/:user_id" />

          <Route Component={null} path="/signup" />
          <Route Component={Login} path="/login" />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
