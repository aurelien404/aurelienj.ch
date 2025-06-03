import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

    
function Header() {
    const [isShrunk, setIsShrunk] = useState(false);
    const { t, i18n } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsShrunk(true);
            } else {
                setIsShrunk(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className={`${isShrunk ? 'py-3 px-7' : 'py-5 px-10'} sticky top-0 left-0 w-full flex justify-between items-center bg-zzcontrast border-b-2 border-base transition-all duration-300 ease-out z-10`}>
            <p className={`${isShrunk ? 'text-2xl' : 'text-3xl'} font-extrabold transition-all duration-300 ease-out`}>aurelienj.</p>
            <span className='flex justify-between'>
                <nav className={`${isShrunk ? 'text-base' : 'text-xl'} font-bold transition-all duration-300 ease-out mr-4`}>
                    <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`mr-4 link-style ${location.pathname === '/' ? 'link-style-active' : ''}`}>{t('link.home')}</Link>
                    <Link to="/service" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`mr-4 link-style ${location.pathname === '/service' ? 'link-style-active' : ''}`}>{t('link.service')}</Link>
                    <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`mr-4 link-style ${location.pathname === '/contact' ? 'link-style-active' : ''}`}>{t('link.contact')}</Link>
            </nav>
                
                <button
                    className={`font-extrabold mx-0.5 border-none bg-none cursor-pointer ${i18n.language === 'fr' ? 'text-zzlink text-sm' : ''}`}
                    onClick={() => changeLanguage('fr')}>FR</button>
                <button
                    className={`font-extrabold mx-0.5 border-none bg-none cursor-pointer ${i18n.language !== 'fr' ? 'text-zzlink text-sm' : ''}`}
                    onClick={() => changeLanguage('en')}>EN</button>
            </span>
        </header>
    );
}

export default Header;




























