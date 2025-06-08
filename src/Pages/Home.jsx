import { useTranslation } from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <h1 className='font-extrabold ' >Home.jsx</h1>
      <div>
        <h1>{t('welcome')}</h1>
        <p>{t('description')}</p>

        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('fr')}>FR</button>
      </div>
    </>
  )
};

export default Home


