import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';

import "./Logout.css";

const Logout = () => {
   
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogout = (e) =>{
       e.preventDefault();

       dispatch(logout());
    }
  
  return (
    <div className="logout">
     <h1>
      Bienvenido <span className="user_nombre">{user.name}</span>
    </h1>{" "}
        <button className="logout_button" onClick={(e) => handleLogout(e)}>
          Logout
        </button>
        

    </div>
  )
}

export default Logout