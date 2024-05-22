import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Header = () => {
    return (
        <div className='border-b-2 border-b-cyan-500 py-6'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link 
                    className="text-3xl font-bold tracking-tight text-cyan-500" 
                    to={'/'}>
                        PlaceHolder
                </Link>
                <div className='md:hidden'>
                    <MobileNav />
                </div>
                <div className='hidden md:block'>
                    <DesktopNav/>
                </div>
            </div>
        </div>
    );
}

export default Header;