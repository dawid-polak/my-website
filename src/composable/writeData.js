import checkLang from "./checkLang.js"
import readData from "../firebase/readData.js";

const writeData = async(component) => {

    const { lang } = checkLang();
    const { data } = await readData(lang, component);

    return { data }
}

export default writeData;