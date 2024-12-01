import { useSelector, useDispatch } from "react-redux";
import { addInstrumentToCart } from "../features/cartSlice";
import { removeInstrumentFromCart } from "../features/cartSlice";

export const ListaInstrumento = ({instrumentos}) =>{
  const dispatch = useDispatch();

  const { instrumentoList } = useSelector(state => state.cart);

  const handleAddOrRemoveInstrument = (instrumentoId) =>{
    const instrumento = instrumentos.find(instrumento => instrumento.id === instrumentoId);
   // dispatch(addInstrumentToCart(instrumento));
    if (instrumentoList.find(pdt => pdt.id === instrumentoId)) {
         dispatch(removeInstrumentFromCart(instrumentoId));       
    } else {
        dispatch(addInstrumentToCart(instrumento));
    }
  }
   
  return(
        <>
        <h2>Lista de Instrumentos</h2>
        <div className="row">
         {
            instrumentos.map( instrumento => {   //id <input type="image"> </input>   {instrumento.img}  <p><input type="img"  /></p>
                return( 
                    <div key={instrumento.id} className="col-3 mt-3">
                       <p> <img src={instrumento.url} alt="instrument"/></p>
                       <h4>{instrumento.nombre}</h4>
                       <p><b>Precio</b> {instrumento.precio}</p>
                       <p><b>Tipo</b> {instrumento.tipos}</p> 
                       <button
                        className={`btn ${instrumentoList.find(pdt => pdt.id === instrumento.id) ? "btn-danger" : "btn-success"}`}
                        onClick={() => handleAddOrRemoveInstrument(instrumento.id)}
                      >
                        {instrumentoList.find(pdt => pdt.id === instrumento.id) ? "Remove" : "Add"} to Cart
                      </button> 
                      
                    </div>
                )
            })
         }
        </div>
        </>
    )
} //${pdtsInCart.find(pdt => pdt.id === instrumento.id) ? "btn-danger" :"   "}        
//{pdtsInCart.find(pdt => pdt.id === instrumento.id) ? "Remove" : "Add"}
/*             instrumentos.map( instrumento => {
                return(
                <div key={instrumento.id} className="col-3 mt-3">
                       <h4>{instrumento.nombre}</h4>
                       <p><b>Precio</b> {instrumento.precio}</p>
                       <p><b>Tipo</b> {instrumento.tipo}</p> 
                       <button
                        className={`btn btn-success`}
                        onClick={() => handleAddOrRemoveInstrument(instrumento.id)}
                      >
                        Add to Cart
                      </button> 
                      
                    </div>

*/