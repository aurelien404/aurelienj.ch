import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Footer() {
    const { t } = useTranslation();
    const location = useLocation();
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

    const HoverLettersLink = ({ to, isActive, children, onClick }) => {
        return (
            <Link
                to={to}
                onClick={onClick}
                className={`link-style mr-4 ${isActive ? 'link-style-active' : ''} letter-hover-effect`}
            >
                {[...children].map((char, i) => (
                    <span key={i} className="inline-block transition-transform duration-300 hover:rotate-12 hover:text-zzlink">
                        {char}
                    </span>
                ))}
            </Link>
        );
    };

    const footerNav = [
        { to: '/UiUxLab', labelKey: 'link.UiUxLab' },
        { to: '/service', labelKey: 'link.service' },
        { to: '/contact', labelKey: 'link.contact' },
    ];

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
            <div className='w-full py-10 md:py-25 mx-auto flex flex-col items-center bg-zzlink text-zzcontrast'>
                <a href='/' className='text-3xl md:text-5xl w-full text-center font-extrabold transition-all duration-300 ease-out'>
                    {[...'aurelienj.'].map((char, i) => (
                        <span key={i}
                            className="inline-block transition-transform duration-300 hover:rotate-12 hover:text-zzbase">
                            {char}
                        </span>
                    ))}
                </a>


                <nav className='flex gap-6 text-sm md:text-lg mt-6 md:mt-10'>
                    {footerNav.map((link) => (
                        <Link
                            key={link.to} to={link.to}
                            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                            className={`link-zzstyle ${location.pathname === '{ link.to }' ? 'link-zzstyle-active' : ''}`}
                        >
                            {t(link.labelKey)}
                        </Link>

                    ))}
                </nav>


                <nav className='flex flex-row gap-4 text-xs md:text-sm font-extralight mt-2'>
                    <a href='/PP' className="link-style">{t('link.PP')}</a>
                    <a href='/LN' className="link-style">{t('link.LN')}</a>
                </nav>
            </div>
            <div className='py-4 px-6 w-full flex justify-between mx-auto text-zzcontrast font-extralight text-xs bg-zzbase'>
                <p>Copyright © 2025</p>
                <a>aurelienj.ch</a>
            </div>
        </footer>
    );
}

export default Footer;