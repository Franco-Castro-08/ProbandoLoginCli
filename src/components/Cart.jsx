import { useDispatch, useSelector } from "react-redux"
import { removeInstrumentFromCart } from "../features/cartSlice";


export const Cart = () => {

    const dispatch = useDispatch();
    const {instrumentoList} = useSelector(state => state.cart);

    const handleRemoveInstrument = (instrumentoId) => dispatch(removeInstrumentFromCart(instrumentoId));

    return(
        <>
        <h2>Cart</h2>
        <table className="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Tipo</th>
            </tr>
        </thead> 
        <tbody>
            {instrumentoList.map(instrumento => {
              return(
                <tr>
                    <th scope="row">{instrumento.id}</th>
                    <td scope="row">{instrumento.nombre}</td>
                    <td scope="row">{instrumento.precio}</td>
                    <td scope="row">{instrumento.tipos}</td>
                    <td scope="row"><button className="btn btn-danger" onClick={()=> handleRemoveInstrument(instrumento.id)}
                    >Delete</button></td>
                </tr>
              )
            })}
        </tbody> 
        </table>
        </>
    )
}