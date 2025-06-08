import { useTranslation } from 'react-i18next';

function Service() {
    const { t } = useTranslation();
    return (
        <div className="w-screen h-[150vh] bg-red-400">
            <h1 className="text-2xl font-bold">{t('service.title')}</h1>
            <p>{t('service.title')}</p>
        </div>
    );
}

export default Service;
