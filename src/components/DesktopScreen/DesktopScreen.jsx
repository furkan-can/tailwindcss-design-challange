import video from "../../assets/video.svg"
import IconComponent from "../IconsComponent/IconComponent ";
const DesktopScreen = () => {
    return (
        <div className="relative h-full w-full">
            <img className=" z-[1] relative select-none cursor-pointer" src={video} alt="Video" />
            <IconComponent fill={"z-[2] absolute top-[315px] left-[120px]"} width={85} height={86} iconType={"rectangle28"}></IconComponent>
        </div>
    )
};

export default DesktopScreen;