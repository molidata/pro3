import Navert from './Navert';
import Header from './Header';
import Footer from './Footer';
const Layout=({children})=>{
    return(
        <div className='row'>
            
            <div className='col-md-2'>
                <Navert/>
            </div> 
            <div className='col-md-10'>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
            
        </div>
        
    );
}
export default Layout