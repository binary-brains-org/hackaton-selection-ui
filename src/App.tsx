import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
 
  return (
    <Router>
      <Routes>
        <Route element={<>hello world</>} path="/test"/>
      </Routes>
    </Router>
  );
}

export default App;
