import { IoIosLaptop, IoMdPhonePortrait, IoIosTabletLandscape } from "react-icons/io";
import useWindowSize from "../hooks/useWindowSize";

const Header = ({ title }) => {
    const { width } = useWindowSize();
    return (
        <header className='flex justify-between bg-slate-300 p-2'>
            <h1 className='font-bold text-4xl' >{title}</h1>
            <h1 className='font-bold text-5xl px-2'>
                {width < 768 ? <IoMdPhonePortrait />
                    : width < 992 ? <IoIosTabletLandscape />
                        : <IoIosLaptop />}
            </h1>
        </header>
    )
}

export default Header
