import { useTranslation } from 'react-i18next';

function NotFound() {
    const { t } = useTranslation();
    return (
        <div className="w-screen h-[150vh] bg-yellow-200">
            <h1 className="text-2xl font-bold">{t('notfound.title')}</h1>
            <p>{t('notfound.content')}</p>
        </div>
    );
}

export default NotFound;
