import React from 'react';
import swal from 'sweetalert';
import {calcularTotal} from '../Helpers.js';


const Formulario = (props) => {

    const {cantidad, guardarCantidad, plazo, guardarPlazo,guardarTotal,cargarSpinner} = props;

    //Otra forma d eusar el onChange
    //const leerCantidad = (e) =>{
    //    guardarCantidad(parseInt(e.target.value));
    //}
    //Y abajo en onChange poner: onChange={leerCantidad}

    //Cuando el usuario hace submit
    const calcularPrestamo = e =>{
        e.preventDefault();
        
        //Validad
        if( cantidad===0 || plazo===""){
            swal("OH OH!", "Te faltaron campos por llenar!", "warning");
            return;
        }

        //Habilitamos el spinner
        cargarSpinner(true);

        setTimeout(()=>{
            //Realizar la cotizacion
            guardarTotal(calcularTotal(cantidad,plazo));
            
            cargarSpinner(false);
        },1600);

        
        
    }

    return ( 

        <form onSubmit={calcularPrestamo}>
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input
                        className="u-full-width"
                        type="number"
                        placeholder="Ejemplo: 3000"
                        onChange = { e => guardarCantidad( parseInt(e.target.value)) }
                    />
                </div>

                <div>
                    <label>Plazo para pagar</label>
                    <select 
                        className="u-full-width"
                        onChange={e => guardarPlazo( parseInt( e.target.value))}
                    >
                        <option value="">Seleccionar</option>
                        <option value="3">3 Meses</option>
                        <option value="6">6 Meses</option>
                        <option value="12">12 Meses</option>
                        <option value="24">24 Meses</option>
                    </select>
                </div>

                <div>
                    <input 
                        type="submit"
                        value="Calcular"
                        className="button-primary u-full-width"
                    />
                </div>
            </div>
        </form>
     );
};
 
export default Formulario;

