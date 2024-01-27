import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeParents from "./pages/Home/HomeParents";
import ViewParent from "./pages/Home/HomeParents/ViewParent.tsx";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomeParents} >
          </Route>
          <Route path="/parent" Component={HomeParents} >
          </Route>
            <Route path="/getWallet" Component={ViewParent} >
            </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
