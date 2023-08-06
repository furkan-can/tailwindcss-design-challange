import video from "../../assets/video.svg"
import IconComponent from "../IconsComponent/IconComponent ";
const DesktopScreen = () => {
    return (
        <div className="relative h-full w-full iphone:h-[100px] iphone:absolute iphone:top-[475px]">
            <img className=" z-[1]  absolute select-none cursor-pointer" src={video} alt="Video" />
            <IconComponent fill={"z-[2] iphone:hidden flex absolute top-[315px] left-[120px] "} width={85} height={86} iconType={"rectangle28"}></IconComponent>
            <IconComponent fill={"z-[2] absolute top-[315px] iphone:flex hidden left-[120px] iphone:top-[195px] iphone:left-[60px]"} width={49} height={50} iconType={"rectangle28"}></IconComponent>
        </div>
    )
};

export default DesktopScreen;