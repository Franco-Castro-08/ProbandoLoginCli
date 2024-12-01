
import {configureStore} from '@reduxjs/toolkit';
//import  authsReducer  from '../features/auth/authSlice'
import usersReducer from '../features/userSlice';
import cartReducer from '../features/cartSlice';


export default configureStore({
  
    reducer:{
     user: usersReducer,
     cart: cartReducer
    }
})

