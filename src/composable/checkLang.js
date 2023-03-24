import Cookies from 'universal-cookie';

const checkLang = () => {
    const cookies = new Cookies();
    let lang = cookies.get('lang');

    return { lang }
}

export default checkLang;
