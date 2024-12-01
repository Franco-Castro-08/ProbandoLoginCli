import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCount: 0,
    instrumentoList: [],
}

export const cartSlice = createSlice({
 name: 'cart',
 initialState: initialState,
 reducers:{
       addInstrumentToCart: (state,action) => {
        state.instrumentoList = [...state.instrumentoList, action.payload];
        state.totalCount += 1;
       },
       removeInstrumentFromCart: (state,action) => {
        const instumentId = action.payload;
        state.totalCount -= 1;
        state.instrumentoList = state.instrumentoList.filter(instrumento => instrumento.id !== instumentId); 
       }
 }
})

export const { addInstrumentToCart, removeInstrumentFromCart } = cartSlice.actions;

export default cartSlice.reducer;