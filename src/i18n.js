import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
    .use(HttpBackend) // Ajoute le backend HTTP pour charger les fichiers
    .use(initReactI18next)
    .init({
        lng: 'en', // Langue par défaut
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // Réact gère déjà l'échappement
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json' // Chemin vers les fichiers JSON
        }
    });

export default i18n;
