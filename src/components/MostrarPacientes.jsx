import React, {useEffect, useState} from 'react'
//import PacienteIndividual from './PacienteIndividual'
import {Link} from 'react-router-dom'
import axios from 'axios'

//function MostrarPacientes()
export const MostrarPacientes =({pacientes}) => {


  function borrarpaciente(idpaciente){
    axios.post('/api/paciente/borrarpaciente', {idpaciente: idpaciente}).then(res =>{
        console.log(res.data)
        alert(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  const[datapacientes, setdatapaciente]=useState([])   


useEffect(() => {
  axios.get('api/paciente/obtenerpacientes').then(res => {
       console.log(res.data) 
       setdatapaciente(res.data)
  }).catch(err =>{
     console.log(err)
  })
 }, [])

//<button className='btn btn-dark'>
//<i className='fa-solid fa-circle-plus'></i> Añadir
//</button>

 return(
     
    <div className='Paciente'>
        <div className='container-fluid'>
          <div className='row mt-3'>
            <div className='col-md-4 offset-4'>
                <div className='d-grid mx-auto'>
                  <h2>Tabla Pacientes</h2>
                </div>
            </div>    
            </div> 
          </div>

     <div className='row mt-3'>
         <div className='col-12 col-lg-8 offset-lg-2'>
           <div className='table-responsive'>
              <table className='table table-bordered'>
               <thead>
                 <tr><th>#</th><th>NOMBRE</th><th>APELLIDO</th><th>TELEFONO</th><th></th></tr>
               </thead>
               <tbody className='table-group-divider'>
                   {datapacientes.map( (paciente, i) => (
                     <tr key={paciente.id}>
                         <td>{(i+1)}</td> 
                         <td>{paciente.nombre}</td>
                         <td>{paciente.apellido}</td>
                         <td>{paciente.telefono}</td>
                         <td>
                          
                          <Link to={`/editarpaciente/${paciente.idpaciente}`}>
                            <button className="btn btn-warning">
                             <i className='fa-solid fa-edit'></i>
                            </button>
                          </Link> 
                          &nbsp;
                          <button className='btn btn danger' onClick={()=>{borrarpaciente(paciente.idpaciente)}}>
                             <i className='fa-solid fa-trash'></i>
                          </button>
                         </td>
                     </tr>   
                     ))
                    }            
               </tbody>
              </table>
           </div>
         </div>
     </div>

  </div>
  
  )
}
  /*  
   <div className='modal fade'>
          

    </div>  


      <td>
         <button className='btn btn warning'>
           <i className='fa-solid fa-edit'></i>
         </button>
          &nbsp;
         <button className='btn btn danger'>
           <i className='fa-solid fa-trash'></i>
         </button>
      </td>
  
      <Link to={`/editarpaciente/${paciente.idpaciente}`}><li className="btn btn-success">Editar</li></Link>
  
      */

 //Mapear lista paciente en objeto paciente
 /*
      //listapacientes
      const tablapacientes = datapacientes.map(paciente =>{
        return(
            <div>
                <PacienteIndividual paciente={paciente}/>
            </div>
        )
    })

  return(
  <div>
    <h2>Tabla de Pacientes</h2>
     {tablapacientes}
  </div>
  )
*/



//export default MostrarPacientes