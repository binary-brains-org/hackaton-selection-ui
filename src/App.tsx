import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeParents from "./pages/Home/HomeParents";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomeParents} >
          </Route>
          <Route path="/parent" Component={HomeParents} >
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
