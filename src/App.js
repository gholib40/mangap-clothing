import Home from "./Route/Home/Home.Component";
import { Route,Routes } from "react-router-dom";

const Navigation = ()=> {
  return (
    <div>
      <div>
       <h1>this navigation</h1>
      </div>
    </div>
  )
}

const App = ()=> {
  return (
    <Routes>
       <Route path="/home" element={ <Home/>} >
        <Route />
       </Route>
    </Routes>
  
  )
}

export default App;
