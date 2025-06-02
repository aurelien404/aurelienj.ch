import { useTranslation } from 'react-i18next';

    
function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="p-4 bg-gray-800 text-white">
            <h1>My Website footer</h1>
        </footer>
    );
}

export default Footer;