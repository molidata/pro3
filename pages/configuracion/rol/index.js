import axios from "axios";

import  Layout from "../../../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
function Home() {

    return(
        <Layout>
            <div className="row">
                <div className="col-md-4">
                    <a href="rol/nuevo" className="btn btn-info">Nuevo rol</a>
                </div>
                
            </div>
            <div className="row">
               
                <div className="col-md-12">
                    <table className="table table-stripped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Rol</th>
                                <th>Descripción</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>rol</td>
                                <td>descripción</td>
                                <td><a href="#"><i class="bi bi-pencil-square"></i></a></td>
                            </tr>
                            <tr>
                                <td>rol</td>
                                <td>descripción</td>
                                <td><a href="#"><i class="bi bi-pencil-square"></i></a></td>
                            </tr>
                            <tr>
                                <td>rol</td>
                                <td>descripción</td>
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