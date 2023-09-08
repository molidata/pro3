import {useState} from "react";
import axios from "axios";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from  '../styles/Login.module.css';
function LoginPage(){
    const[credentials, setCredentials]= useState({
        email:'',
        password:''
    })

    const router=useRouter()

    const handleChange=(e)=>{
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
        
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(credentials);
        const response=await axios.post('/api/auth/login', credentials);

        if(response.status===200){
            router.push("/dashboard");
        }
        //console.log(response);
        
    }
    return(
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div  className={styles.loginpanel} >
                    <div className="panel-heading border"><h3 className="panel-title">BIENVENIDO </h3></div>
                    
                    <div className="panel-body border">
                        <form onSubmit={handleSubmit} className="login-form">
                            <fieldset>
                                <div className="form-group">
                                    <label for="inputEmail" >Correo electrónico</label>
                                    <input name="email" type="email" placeholder="email" onChange={handleChange} id="inputEmail" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="inputPassword" >Password</label>
                                    <input name="password" type="password" placeholder="password" onChange={handleChange} id="inputPassword" className="form-control"/>
                                </div>
                                <br />  
                                <div className="form-group">
                                    <button className="btn btn-lg btn-success btn-block">Login</button>
                                </div>
                                
                            </fieldset>
                            
                        </form>

                    </div>
                    
                </div>
                
            </div>
        </div>
        
    )
}
export default LoginPage