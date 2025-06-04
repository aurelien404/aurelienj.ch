import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import emailjs from '@emailjs/browser';



function Footer() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const isValidEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSend = () => {
        if (!isValidEmail(email)) {
            setMessage(t('footer.invalidEmail'));
            setIsError(true);
            return;
        }


        setIsLoading(true);

        emailjs
            .send(
                'service_exigxan',      // ← Service ID
                'template_2g1jldg',     // ← Template ID
                { email },              // ← Les variables
                'IDigX0b8W-OZaTfmI'     // ← Public key
            ).then(() => {
                setMessage(t('footer.emailValid'));
                setIsError(false);
                setEmail('');
            }).catch(() => {
                setMessage(t('footer.emailError'));
                setIsError(true);
            }).finally(() => {
                setIsLoading(false);
            });
    };


    return (
        <footer className="w-screen bg-zzcontrast border-t-2 border-zzbase">
            <div className='py-30 w-full mx-auto flex flex-col items-center text-center border-b-2 border-zzbase'>
                <p className='text-xl md:text-3xl font-extrabold'>{t('footer.title')}</p>
                <p className='w-5/6 text-sm md:text-lg font-extralight'>{t('footer.subtitle')}</p>
                <p className='text-[10px] md:text-xs font-extralight'>"{t('footer.note')}</p>

                <div className={`w-auto mx-auto h-10  flex items-center text-center sm:text-sm md:text-base ${isError ? 'text-red-500' : 'text-green-500'}`}>
                    {message}
                </div>

                <div className='flex flex-col sm:flex-row items-center w-[90%] md:w-3/6 gap-4' >
                    <input value={email}
                        onChange={e => {
                            setEmail(e.target.value);
                            setMessage(null);
                            setIsError(false);
                        }}

                        className='flex justify-between w-full md:w-4/5 border-2 py-4 px-3 md:py-2 focus:border-zzlink focus:text-zzlink hover:scale-105 transition duration-200 active:scale-100 ' type='email' placeholder={t('footer.mail')} />

                    <button className={`w-full md:w-1/5 border-2 py-4 px-3 md:py-2 transform transition duration-200 hover:scale-105 active:scale-95
                            hover:border-zzlink focus:border-zzlink active:border-zzlink
                            hover:text-zzlink focus:text-zzlink active:text-zzlink
                            ${isLoading ? 'animate-shake text-zzlink border-zzlink' : ''}`}
                        onClick={handleSend}
                        disabled={isLoading} >
                        {isLoading ? t('footer.loading') : t('footer.button')}
                    </button>

                </div>
            </div>
            <div className='w-full h-[150px] py-30 mx-auto flex flex-col items-center bg-zzbase '>
            </div>
            <div className='py-4 px-6 w-full flex justify-between mx-auto text-zzcontrast font-extralight text-xs bg-zzbase'>
                <p>Copyright © 2025</p>
                <a>aurelienj.ch</a>
            </div>
        </footer>
    );
}

export default Footer;