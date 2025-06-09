import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const { t } = useTranslation();

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const isValidUrl = (url) => {
        if (!url) return true; // facultatif
        return /^(https?:\/\/)?(www\.)?[\w-]+\.(com|net|org|fr|ch|io|dev|app|info|be|pro)(\/[\w\-./?%&=]*)?$/.test(url.trim());
    };

    const isValidName = (name) => name.trim() !== '';

    const isValidEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSend = () => {
        if (!isValidName(name)) {
            setMessage(t('form.invalidName'));
            setIsError(true);
            return;
        }

        if (!isValidEmail(email)) {
            setMessage(t('form.invalidEmail'));
            setIsError(true);
            return;
        }

        if (!isValidUrl(url)) {
            setMessage(t('form.invalidUrl'));
            setIsError(true);
            return;
        }

        if (text.trim() === '') {
            setMessage(t('form.emptyText'));
            setIsError(true);
            return;
        }

        setIsLoading(true);

        emailjs
            .send(
                'service_exigxan',            // ← Service ID
                'template_o55lwdq',           // ← Template ID
                { name, email, url, text },   // ← Les variables
                'IDigX0b8W-OZaTfmI'           // ← Public key
            )
            .then(() => {
                setMessage(t('form.emailValid'));
                setIsError(false);
                setName('');
                setEmail('');
                setUrl('');
                setText('');
            })
            .catch(() => {
                setMessage(t('form.emailError'));
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <>
            <div className="w-full h-[120vh] md:h-[100vh] flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-6 md:px-20 py-20">
                <div className="w-full md:w-3/5 h-full flex flex-col justify-center gap-6">
                    <h1 className="text-3xl md:text-6xl font-extrabold text-zzbase">
                        {t('contact.title')}
                    </h1>
                    <p className="text-lg text-zzbase font-normal w-full md:w-4/6" dangerouslySetInnerHTML={{ __html: t('contact.text') }}></p>

                    <div className='w-full md:w-4/6 grid gap-3 justify-items-center'>
                        <input value={name}
                            onChange={(e) => { setName(e.target.value); setMessage(null); setIsError(false); }}
                            className='w-full border-2 py-4 px-3 md:py-2 focus:border-zzlink focus:text-zzlink hover:scale-105 transition duration-200 active:scale-100 ' type='text' placeholder={t('form.name')}
                        />
                        <input value={email}
                            onChange={e => { setEmail(e.target.value); setMessage(null); setIsError(false); }}
                            className='w-full border-2 py-4 px-3 md:py-2 focus:border-zzlink focus:text-zzlink hover:scale-105 transition duration-200 active:scale-100 ' type='email' placeholder={t('form.mail')}
                        />
                        <input value={url}
                            onChange={(e) => { setUrl(e.target.value); setMessage(null); setIsError(false); }}
                            className='w-full border-2 py-4 px-3 md:py-2 focus:border-zzlink focus:text-zzlink hover:scale-105 transition duration-200 active:scale-100 ' type='url' placeholder={t('form.url')}
                        />
                        <textarea value={text}
                            onChange={(e) => { setText(e.target.value); setMessage(null); setIsError(false); }}
                            className='w-full border-2 py-4 px-3 md:py-2 focus:border-zzlink focus:text-zzlink hover:scale-105 transition duration-200 active:scale-100 ' rows="7" placeholder={t('form.textarea')}
                        />
                        {message && (
                            <div className={`text-center sm:text-sm md:text-base ${isError ? 'text-red-500' : 'text-green-500'}`}>
                                {message}</div>
                        )}
                        <button className={`w-4/6 md:w-2/5 border-2 py-4 px-3 md:py-2 transform transition duration-200 hover:scale-105 active:scale-95 hover:border-zzlink focus:border-zzlink active:border-zzlink hover:text-zzlink focus:text-zzlink active:text-zzlink
                            ${isLoading ? 'animate-shake text-zzlink border-zzlink' : ''}`} onClick={handleSend} disabled={isLoading}
                        >
                            {isLoading ? t('form.loading') : t('form.button')}
                        </button>

                    </div>
                </div>

                <div className="hidden md:block w-2/5 h-full bg-zzlink">
                </div>
            </div>
        </>
    );
}
export default Contact;