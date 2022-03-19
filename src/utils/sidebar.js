import { AiOutlineRead, AiFillHome } from "react-icons/ai";
import { FaHeadphonesAlt } from "react-icons/fa";
import { MdGTranslate, MdLanguage, MdSettings, MdDeveloperMode } from "react-icons/md";

//Components:
import Read from "../components/read/Read";
import Recitation from "../components/recitation/Recitation";
import Translation from "../components/translation/Translation";
import Setting from "../components/Settings/Setting";
export const sidebarObj = [
    {
        id: 1,
        title: "Read",
        icon: AiOutlineRead,
        Component: Read,
        path: "read"
    },
    {
        id: 2,
        title: "Listen",
        icon: FaHeadphonesAlt,
        Component: Recitation,
        path: "listen"
    },
    {
        id: 3,
        title: "Translation",
        icon: MdGTranslate,
        Component: Translation,
        path: "translation",
        devider: true
    },
    // {
    //     id: 4,
    //     title: "Home",
    //     icon: AiFillHome,
    //     Component: '',
    //     path: "home"
    // },
    // {
    //     id: 5,
    //     title: "Language",
    //     icon: MdLanguage,
    //     Component: '',
    //     path: "language"
    // },
    {
        id: 6,
        title: "Settings",
        icon: MdSettings,
        Component: Setting,
        path: "settings",
        devider: true
    },
    // {
    //     id: 7,
    //     title: "About Developer",
    //     icon: MdDeveloperMode,
    //     Component: '',
    //     path: "about"
    // },

]

