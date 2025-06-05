import { useTranslation } from 'react-i18next';

function UiUxLab() {
    const { t } = useTranslation();
    return (
        <div className="w-screen h-[150vh] bg-amber-700">
            <h1 className="text-2xl font-bold">{t('UiUxLab.title')}</h1>
            <p>{t('UiUxLab.content')}</p>
        </div>
    );
}

export default UiUxLab;