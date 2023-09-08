import axios from "axios";

import  Layout from "../../../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
function Nuevo() {

    return(
        <Layout>
            <div className="row">
                <div className="col-md-4 ">
                    
                        <div className=""><h3 className="">Creando nuevo rol </h3></div>
                </div>
            </div>
            <form  className="">
                <div className="row">
                    
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="inputNombre" >Nombre</label>
                            <input name="nombre" type="text" placeholder="nombre"  id="inputNombre" className="form-control"/>
                        </div>
                    </div>
                        
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="inputDescripcion" >Descripción</label>
                            <input name="descripcion" type="text" placeholder="descripcion"  id="inputDescripcion" className="form-control"/>
                        </div>
                    </div>
                    
                    <div className="col-md-3">
                        <div className="form-group">
                        <br/>
                            <button className="btn btn-success btn-block">Guardar</button>
                        </div>
                    </div> 
                    <div className="col-md-3">
                        <div className="form-group">
                        <br/>
                            <a href="/configuracion/rol" className="btn btn-danger">Cancelar</a>
                        </div>
                    </div>    
                        
                </div>   
                    
            </form>

                  
                        
                    
                    
                
            
            
        </Layout>
        
        
    );
}
export default Nuevo