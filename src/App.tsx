import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
 
  return (
    <Router>
      <Routes>
        <Route element={<>hello world</>} path="/test"/>
        <Route Component={LoginPage} path="/signIn"/>
        <Route path="/signUp" Component={SignUp} />
      </Routes>
    </Router>
  );
}

export default App;
