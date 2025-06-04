import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import emailjs from '@emailjs/browser';


    
function Footer() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = () => {
        if (!email || !email.includes('@')) {
            alert('Veuillez entrer un email valide.');
            return;
        }

        setIsLoading(true);

        emailjs
            .send(
                'service_exigxan',      // ← Service ID
                'template_2g1jldg',     // ← Template ID
                { email },              // ← Les variables
                'IDigX0b8W-OZaTfmI'       // ← Public key
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
            <div className='py-30 w-[80%] mx-auto flex flex-col items-center border-b-2 border-zzbase'>
                <p className='text-3xl font-extrabold'>{ t('footer.title') }</p>
                <p className='text-lg font-extralight'>{ t('footer.subtitle') }</p>
                <p className='text-xs font-extralight'>"{t('footer.note')}"</p>
                {/* Message de retour personnalisé */}
                {message && (
                    <span
                        className={`w-full py-5 block text-center text-base transition-opacity duration-300 ${message ? (isError ? 'text-red-500' : 'text-green-500') : 'text-transparent' }`}>
                        {message} 
                    </span>
                )}
                <span className="">
                    <input value={email}
                        onChange={e => setEmail(e.target.value)}
                        className='w-100 border-2 py-2 px-3 mr-5 focus:border-zzlink focus:text-zzlink hover:scale-105 transition duration-200 active:scale-100 ' type='email' placeholder={ t('footer.mail') } />
                    
                    <button
                        className={`border-2 py-2 px-3 hover:border-zzlink hover:text-zzlink active:text-zzlink transform transition duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 ${isLoading ? 'animate-shake' : ''}`}
                        onClick={handleSend}
                        disabled={isLoading}
                    >
                        {isLoading ? t('footer.loading') : t('footer.button')}
                    </button>


                </span>
            </div>
            <div className='w-full h-[100px] bg-blue-500'>
            </div>
            <div className='py-4 px-6 w-full flex justify-between mx-auto text-zzcontrast font-extralight text-xs bg-zzbase'>
                <p>Copyright © 2025</p>
                <a>aurelienj.</a>
            </div>
        </footer>
    );
}

export default Footer;