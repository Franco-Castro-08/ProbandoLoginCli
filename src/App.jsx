import { Routes, Route, Link } from 'react-router-dom';
//import { useSelector } from "react-redux";
//import { selectUser } from "./features/userSlice";
import {Login} from "./components/Login";
//import Logout from "./components/Logout";
import './App.css';
import {Inicio} from "./components/Inicio";
import { Cart } from './components/Cart';
import { useSelector } from 'react-redux';

//function App() 
//
// {user ?    <Logout/> : <Login/>}
//{user ? <Inicio/> : <Login/>}
export const App = () => {
 // const {email, fullName} = useSelector(state => state.user);
 //<h2>{fullName}</h2>
 //<p>El email en el store es: {email}</p>
 const { totalCount } = useSelector(state => state.cart);
 
  return (
       <div className="container">
          <div className='d-flex py-4'>
           <Link className="btn btn-info mx-2" to="/">Login</Link>
           <Link className="btn btn-info mx-2" to="/inicio">Inicio</Link>
  
          <div className="ms-auto">
           <Link className="btn btn-primary position-relative" to="/cart">
            Cart
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
             {totalCount}
            <span className='visually-hidden'>instrumentos en cart</span>
            </span>
           </Link>
          </div>
        </div> 
          <hr />
         
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route  path='/inicio' element={<Inicio/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
           
        </div>
  )
}



/* 
<div className="App">
<h1>Hello word</h1>
</div>
*/