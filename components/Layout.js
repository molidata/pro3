import Navert from './Navert';
import Header from './Header';
import Footer from './Footer';
const Layout=({children})=>{
    return(
        <><div className='row'>
            <div className='col-md-12'><Header /></div>

        </div><div className='row alturaminima'>
                <div className='col-md-2'>
                    <Navert />
                </div>
                <div className='col-md-10'>

                    <main>{children}</main>

                </div>
            </div><div className='row'>
                <div className='col-md-12'><Footer /></div>
            </div></>
        
    );
}
export default Layout