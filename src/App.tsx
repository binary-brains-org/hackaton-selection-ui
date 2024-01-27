import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Home} path="/home/kid" />
        <Route Component={Home} path="/home/parent" />

        <Route Component={null} path="/view/parent/:user_id" />
        <Route Component={null} path="/view/kid/:user_id" />

        <Route Component={null} path="/signup" />
        <Route Component={null} path="/login" />
      </Routes>
    </Router>
  );
};

export default App;
