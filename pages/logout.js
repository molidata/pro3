import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import  Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
function Logout2() {
    const [user, setUser]=useState({
        email:"",
        username:"",
    })

    const router=useRouter()

    const getProfile=async()=>{
        const response=await axios.get('/api/profile');
        setUser(response.data);
    };
    const logout=async()=>{
        const response=await axios.post('/api/auth/logout');
        router.push("/login");
    }
    return(
        <Layout>
            <div className="row" >
               
                <div className="col-md-12" onMouseMove={() => logout()}>
                    <h3>Cerrando sesión ..</h3>
                    
                    
                </div>
            </div>
            
        </Layout>
        
        
    );
}
export default Logout2