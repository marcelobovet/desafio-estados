import { useState } from "react";
import Mensajes from "./Mensajes";

const Formulario = ({ titulo, subtitulo }) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const [tipo, setTipo] = useState(null)
    const [mensaje, setMensaje] = useState("")


    const validarFormulario = (event) => {
        event.preventDefault()

        if(name === 'ADL' && password === '252525'){
            setTipo('exito')
            return setMensaje("Sesion iniciada correctamente")
        }
        else{
            setTipo('error')
            setMensaje("los datos son incorrectos")
        }
    };

    return (
        <section>
            <h1> { titulo } </h1>
            <h2> { subtitulo } </h2>
            { tipo ? <Mensajes tipo={ tipo } mensaje={ mensaje }></Mensajes> : null }
            
            <form onSubmit={ validarFormulario } >
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <label for="name">Nombre</label>
                        <input id="name" type="text" className="form-control" onChange={ (n) => setName(n.target.value) } /> 
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <label for="password">Contraseña</label>
                        <input id="password" type="password" className="form-control" onChange={ (p) => setPassword(p.target.value) }/> 
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 pt-4">
                        <button className="btn btn-dark" disabled={(name == '' || password == '')}>Iniciar sesion</button>
                    </div>
                </div>
            </form>
        </section>
    );
};



export default Formulario;