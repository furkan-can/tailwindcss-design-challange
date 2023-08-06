import MenuItems from "../../components/MenuItems/MenuItems"
import MenuItem from "../../components/MenuItem/MenuItem"
import Button from "../../components/Button/Button"
import IconComponent from "../../components/IconsComponent/IconComponent "

const Header = () => {
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
            <IconComponent fill={"hidden iphone:flex"} iconType={"icon-burger-menu"} ></IconComponent>
        </div>
    )
}

export default Header;