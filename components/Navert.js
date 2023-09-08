import Link from 'next/Link';


function Navert(){
    const game = 'start';
    switch (game) {
        case 'start':
            return(
                
                <div className='row'>
                    <h3>QARA MEDIC</h3>
                    <Link href="/configuracion/usuario">Usuario</Link>
                    <Link href="/configuracion/rol">Rol</Link>
                    <Link href="/configuracion/sucursal">Sucursal</Link>
                    
                    <Link href="/logout">Logout</Link>
                </div>
                
            );
        case 'playing':
            return(
                
                <div className='row'>
                    <h3>QARA MEDIC</h3>
                    
                    <Link href="/logout">Logout</Link>
                </div>
                
            );
        
        default:
            return(
                
                <div className='row'>
                    <h3>QARA MEDIC</h3>
                    
                </div>
                
            );
      }

    
}
export default Navert