import MenuItems from "../../components/MenuItems/MenuItems"
import MenuItem from "../../components/MenuItem/MenuItem"
import Button from "../../components/Button/Button"
import IconComponent from "../../components/IconsComponent/IconComponent "
import { useRef, useState } from "react"

const Header = () => {

    const [isToggle, setIsToggle] = useState(false);
    const togglebtn = useRef(null);
    const menu = useRef(null);

    window.addEventListener('click', (e) => {
        if (togglebtn.current && !togglebtn.current.contains(e.target) && menu.current && !menu.current.contains(e.target)) {
            setIsToggle(false);
        }
    });

    const handleToggle = () => {
        setIsToggle(!isToggle);
    };


    return (
        <div className="w-[1440px] h-[4.5rem] py-6 flex justify-between items-center gap-[202px]  iphone:w-full iphone:h-[67px] iphone:p-4">
            <div className="text-amber-900 text-[32px] font-bold leading-9 ">Collers</div>
            <MenuItems >
                <MenuItem text={"Products"}></MenuItem>
                <MenuItem text={"Solutions"}></MenuItem>
                <MenuItem text={"Pricing"}></MenuItem>
                <MenuItem text={"Resources"}></MenuItem>
                <MenuItem text={"Log In"}></MenuItem>
                <Button text={"Sign up now"} className={"w-[149px] p-3 px-4 rounded-lg border-2 border-amber-900 text-amber-900 text-base items-center font-medium leading-normal tracking-wide"} />
            </MenuItems>
            <button className="hidden iphone:flex" ref={togglebtn} onClick={() => handleToggle()}>
                <IconComponent fill={"hidden iphone:flex"} iconType={"icon-burger-menu"} ></IconComponent>
            </button>
            {isToggle && (
                <div ref={menu} className={`phonebar hidden iphone:flex iphone:items-end iphone:px-4 iphone:absolute iphone:right-[-10px] iphone:top-12 bg-amber-50 iphone:transition-transform iphone:ease-in duration-500 ${isToggle ? 'iphone:translate-x-0 iphone:opacity-100' : 'iphone:translate-x-full iphone:opacity-0'}`}>
                    <div className="pt-2 pb-3 space-y-1">
                        <a href="!#" className="text-amber-900 text-end block px-3 py-2 rounded-md text-base font-medium">Products</a>
                        <a href="!#" className="text-amber-900 text-end block px-3 py-2 rounded-md text-base font-medium">Solutions</a>
                        <a href="!#" className="text-amber-900 text-end block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
                        <a href="!#" className="text-amber-900 text-end block px-3 py-2 rounded-md text-base font-medium">Resources</a>
                        <a href="!#" className="text-amber-900 text-end block px-3 py-2 rounded-md text-base font-medium">Log in</a>
                        <button className='border-2 border-amber-900 w-36 h-12 rounded-lg text-amber-900 font-medium'>Sign up now</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Header;