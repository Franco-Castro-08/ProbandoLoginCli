import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pacienteTabla: [],
}

export const pacienteSlice = createSlice({
    name: 'paciente',
    initialState: initialState,
    reducers: {
        addPaciente: (state, action) => {
            state.pacienteTabla = [...state.pacienteTabla, action.payload];
        }
    }
})

export const {addPaciente} = pacienteSlice.actions;

export default pacienteSlice.reducer;