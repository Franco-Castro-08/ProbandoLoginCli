import React, {useState} from 'react'
import uniquid from 'uniqid'
import axios from 'axios'

export const AgregarPaciente = () =>{

   //Hooks
   const[nombre,setNombre]= useState('')
   const[apellido,setApellido]= useState('')
   const[telefono,setTelefono]= useState('')

   function agregarPaciente(){ 

      var paciente= {
         nombre: nombre,
         apellido: apellido,
         telefono: telefono,
         idpaciente: uniquid()
      }
       console.log(paciente)

       axios.post('/api/paciente/agregarpaciente', paciente)
       .then(res =>{
          alert(res.data)
       })
       .then(err => {console.log(err)})
   }

    return(
        <div className="container">
            <div className="row">
                <h2 className="mt-4">Crear un nuevo paciente</h2> 
            </div>


         <div className="container">
            <div className="row">
               <div className="col-sm-6 offset-3">
                  <div className="m-b3">
                     <label htmlFor="nombre" className="form-label">Nombre</label>
                     <input type="text" className="form-control" value={nombre} onChange={(e) => {
                        setNombre(e.target.value)}}></input>
                  </div>

                  <div className="m-b3">
                     <label htmlFor="apellido" className="form-label">Apellido</label>
                     <input type="text" className="form-control" value={apellido} onChange={(e) => {
                        setApellido(e.target.value)}}></input>
                  </div>

                  <div className="m-b3">
                     <label htmlFor="telefono" className="form-label">Telefono</label>
                     <input type="text" className="form-control" value={telefono} onChange={(e) => {
                        setTelefono(e.target.value)}}></input>
                  </div> 

                   <button onClick={agregarPaciente} className="btn- btn-success">Guardar Paciente</button> 
                </div>
            </div>
         </div>

     


        </div>


    )
}

