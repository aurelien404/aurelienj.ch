import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();
    return (
        <div className="w-screen h-[150vh] bg-green-300">
            <h1 className="text-2xl font-bold">{t('contact.title')}</h1>
            <p>{t('contact.title')}</p>
        </div>
    );
}

export default Contact;
