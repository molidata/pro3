import axios from "axios";

import  Layout from "../../../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
function Nuevo() {

    return(
        <Layout>
            <div className="row">
                <div className="col-md-4 ">
                    
                        <div className=""><h3 className="">Creando nuevo usuario </h3></div>
                </div>
            </div>
            <form  className="">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="inputName" >Name</label>
                            <input name="name" type="name" placeholder="name"  id="inputName" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="inputNombre" >Nombre</label>
                            <input name="nombre" type="nombre" placeholder="nombre"  id="inputNombre" className="form-control"/>
                        </div>
                    </div>
                        
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="inputEmail" >Correo electrónico</label>
                            <input name="email" type="email" placeholder="email"  id="inputEmail" className="form-control"/>
                        </div>
                    </div>
                        
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="inputTelefono" >Teléfono</label>
                            <input name="telefono" type="telefono" placeholder="telefono"  id="inputTelefono" className="form-control"/>
                        </div>
                    </div>
                        
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="inputRol" >Rol</label>
                            <input name="rol" type="rol" placeholder="rol"  id="inputRol" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="inputSucursal" >Sucursal</label>
                            <input name="sucursal" type="sucursal" placeholder="sucursal"  id="inputSucursal" className="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div className="col-md-3">
                        <div className="form-group">
                        <br/>
                            <button className="btn btn-success btn-block">Guardar</button>
                        </div>
                    </div> 
                    <div className="col-md-3">
                        <div className="form-group">
                        <br/>
                            <a href="/configuracion/usuario" className="btn btn-danger">Cancelar</a>
                        </div>
                    </div>    
                        
                </div>   
                    
            </form>

                  
                        
                    
                    
                
            
            
        </Layout>
        
        
    );
}
export default Nuevo