import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Login/Login";

function App() {
 
  return (
    <Router>
      <Routes>
        <Route element={<>hello world</>} path="/test"/>
        <Route Component={LoginPage} path="/Login"/>
      </Routes>
    </Router>
  );
}

export default App;
