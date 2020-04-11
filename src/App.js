import React,{ useState } from 'react';
import Header from './components/Header.js';
import Formulario from './components/Formulario.js';
import Mensaje from './components/Mensaje.js';
import Resultado from './components/Resultado.js';
import Spinner from './components/Spinner.js';


function App() {

    //Definimos los states
    const [cantidad, guardarCantidad] = useState(0);
    const [plazo, guardarPlazo] = useState("");
    const [total, guardarTotal] = useState(0);
    const [cargando, guardarCargando] = useState(false);

    //Carga condicional de un componente
    let componente;
    
    if(cargando)
        componente = <Spinner/>
    else if(total===0)
        componente = <Mensaje/>
    else    
        componente = <Resultado
                        total = {total}
                        cantidad ={cantidad}
                        plazo={plazo}
                    />

    return ( 
        <div >
            <Header 
                titulo = "Cotizador de prestamos" 
            />
            <div className="container">
                <Formulario 
                    cantidad = {cantidad}
                    guardarCantidad = {guardarCantidad}
                    plazo={plazo}
                    guardarPlazo={guardarPlazo}
                    guardarTotal={guardarTotal}
                    cargarSpinner={guardarCargando}
                />

                <div className="mensaje">
                    {componente}
                </div>
            </div>
            <div className="referencia">
                <label >Con Amor. Gary &#128154;</label>
            </div>
        </div>
    );
}

export default App;