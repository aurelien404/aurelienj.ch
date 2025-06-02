import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();
    return (
        <div className="w-screen h-[150vh] bg-blue-200">
            <h1 className="text-2xl font-bold">{t('home.title')}</h1>
            <p>{t('home.content')}</p>
        </div>
    );
}

export default Home;