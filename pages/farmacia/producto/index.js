import axios from "axios";

import  Layout from "../../../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
function Home() {

    return(
        <Layout>
            <div className="row">
                <div className="col-md-4">
                    <a href="farmacia/producto/nuevo" className="btn btn-info">Nuevo Producto</a>
                </div>
                <div className="col-md-4">
                    <a href="farmacia/producto/medida" className="btn btn-info">Nueva Medida</a>
                </div>
            </div>
            <div className="row">
               
                <div className="col-md-12">
                    <table className="table table-stripped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Código</th>
                                <th>Nombre</th>
                                <th>Medida</th>
                                
                                <th>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Usuario</td>
                                <td>Email</td>
                                <td>Rol</td>
                                
                                <td><a href="#"><i class="bi bi-pencil-square"></i></a></td>
                            </tr>
                            <tr>
                                <td>Usuario</td>
                                <td>Email</td>
                                <td>Rol</td>
                                
                                <td><a href="#"><i class="bi bi-pencil-square"></i></a></td>
                            </tr>
                            <tr>
                                <td>Usuario</td>
                                <td>Email</td>
                                <td>Rol</td>
                                
                                <td><a href="#"><i class="bi bi-pencil-square"></i></a></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            
        </Layout>
        
        
    );
}
export default Home