import Home from "./Route/Home/Home.Component";
import { Route,Routes } from "react-router-dom";
import Navigation from "./Route/navigation/Navigation.component";
import SignIn from "./Route/sign-in/sign-in.component";
import SignUp from "./sign-up/sign-up.component";

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
        <Route path="sign-in" element={<SignIn/>} />
       </Route>
    </Routes>
  
  )
}

export default App;
