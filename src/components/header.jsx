import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';

    
function Header() {
    const { t } = useTranslation();
    return (
        <header className="w-screen h-[100px] p-4 font-extrabold">
            <p className='text-3xl '>aurelienj.</p>
            <nav className="pl-4">
                <Link to="/" className="mr-4">Home</Link>
                <Link to="/service" className="mr-4">Service</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;