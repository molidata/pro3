import Link from 'next/Link';
import {useRouter} from 'next/router';
import { usePathname } from 'next/navigation';
function Navert(){
    const router=useRouter();
    const game = 'start';
    let pathname = usePathname().split('/');
    
    switch (pathname[1]) {
        case 'configuracion':
            return(
                
                <div className='row'>
                    <h3>QARA MEDIC</h3>
                    
                    
                    <Link href="/configuracion/usuario">Usuario</Link>
                    <Link href="/configuracion/rol">Rol</Link>
                    <Link href="/configuracion/sucursal">Sucursal</Link>
                    
                    <Link href="/logout">Logout</Link>
                </div>
                
            );
        case 'modulos':
            return(
                
                <div className='row'>
                    <h3>QARA MEDIC</h3>
                    <Link href="/farmacia">Farmacia</Link>
                    <Link href="/cita">Citas</Link>
                    <Link href="/logout">Logout</Link>
                </div>
                
            );
        case 'farmacia':
            return(
                
                <div className='row'>
                    <h3>QARA MEDIC</h3>
                    <Link href="/farmacia/producto">Productos</Link>
                    <Link href="/productos">Compras</Link>
                    <Link href="/logout">Ventas</Link>
                    <Link href="/logout">Logout</Link>
                </div>
                
            );
        default:
            return(
                
                <div className='row'>
                    <h3>QARA MEDIC</h3>
                   
                    <Link href="/logout">Logout</Link>
                </div>
                
            );
      }

    
}
export default Navert