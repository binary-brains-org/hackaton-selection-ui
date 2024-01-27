import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF8400",
      contrastText: "#000"
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/">
            Redirec
          </Route>
          <Route Component={Home} path="/home/kid" />
          <Route Component={Home} path="/home/parent" />

          <Route Component={null} path="/view/parent/:user_id" />
          <Route Component={null} path="/view/kid/:user_id" />

          <Route Component={null} path="/signup" />
          <Route Component={null} path="/login" />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
