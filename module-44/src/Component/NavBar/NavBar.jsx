import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
const NavBar = () => {
    const [open,setOpen]=useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/products', name: 'Products', id: 5 },
      ];
    return (
        <nav className="bg-gray-900 p-6">
              <div onClick={()=>setOpen(!open)} className="md:hidden">
                {
                    open===true ?  <AiOutlineClose className="text-2xl"></AiOutlineClose>
                     : <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
                }
             
              </div>
            <ul className={`
            md:flex duration-100 md:justify-center absolute md:static 
            ${open ? 'top-16' :'-top-60'}
            bg-gray-900 p-4 mt-6 md:p-0 md:mt-6
            
            `}>
                {
                    routes.map(routes=><Link key={routes.id} route={routes}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;