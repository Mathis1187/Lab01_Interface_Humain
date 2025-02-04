import { useState } from "react";
import { useTranslation } from 'react-i18next';

const Header = () => {

    const { t, i18n } = useTranslation();
    const [nextLang, setNextLang] = useState('en');

    const handleLocalChange = () => {

        i18n.changeLanguage(nextLang);

        if (nextLang == 'fr') {
            setNextLang('en');
        } else {
            setNextLang('fr');
        }
    }


    return (
        <>
            <button onClick={handleLocalChange}>{nextLang}</button>
            <h1>{t('Welcome')}</h1>
        </>
    );

}

export default Header;