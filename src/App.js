
import {Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Signin from './pages/Signin'
import Payment from './pages/Payment'
import Forgotpass from './pages/Forgotpass'
import Reader from './pages/Reader'
import Client from './pages/Client'
import Bills from './pages/Bills'
import Invoice from './pages/Invoice'
import Setting from './pages/Setting'
function App() {
  return (   
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Forgotpass" element={<Forgotpass/>}/>
        <Route path="/Reader" element={<Reader/>}/>
        <Route path="/Payment" element={<Payment/>}/>
        <Route path="/Client" element={<Client/>}/>
        <Route path="/Bills" element={<Bills/>}/>
        <Route path="/Invoice" element={<Invoice/>}/>
        <Route path="/Setting" element={<Setting/>}/>
      </Routes> 
  
     
  );
}

export default App;
