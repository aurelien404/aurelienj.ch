import { useTranslation } from 'react-i18next';

    
function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="w-screen h-96 bg-zzcontrast border-t-2 border-zzbase">
            <h1>My Website footer</h1>
        </footer>
    );
}

export default Footer;