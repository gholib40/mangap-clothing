import Home from "./Route/Home/Home.Component";
import { Route,Routes } from "react-router-dom";
import Navigation from "./Route/navigation/Navigation.component";
import Authentication from "./Route/authentication/authentication.component";
import Shop from "./Route/shop/shop.component";
import CheckOut from "./Route/Checkout/checkout.component";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import { useEffect } from "react";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
const App = ()=> {
  const dispatch = useDispatch()
  useEffect(()=> {
    const unsubscribe = onAuthStateChangedListener((user)=> {
     if(user){
        createUserDocumentFromAuth(user)
     }
      dispatch(setCurrentUser(user))
    })
    return unsubscribe
   },[])
  return (
    <Routes>
       <Route path="/" element={<Navigation />} >
        <Route index element={ <Home/>} />
        <Route path="shop/*" element={<Shop/>} /> 
        <Route path="auth" element={<Authentication/>} />
        <Route path="checkout" element = {<CheckOut />} />
       </Route>
    </Routes>
  
  )
}

export default App;
