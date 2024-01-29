import Home from "./Route/Home/Home.Component";
import { Route,Routes } from "react-router-dom";
import Navigation from "./Route/navigation/Navigation.component";

const Shop = ()=> {
  return (
    <h1>Shop Page</h1>
  )
}

const App = ()=> {
  return (
    <Routes>
       <Route path="/" element={<Navigation />} >
        <Route index element={ <Home/>} />
        <Route path="shop" element={<Shop/>} />
       </Route>
    </Routes>
  
  )
}

export default App;
