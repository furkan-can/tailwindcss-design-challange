import WhyJoinUs from "../components/WhyJoinUs/WhyJoinUs"
// import video from "../assets/video.svg"
import IconComponent from "../components/IconsComponent/IconComponent "
import DesktopScreen from "../components/DesktopScreen/DesktopScreen"
const WhyJoinPage = () => {
    return (
        <div className="Section w-full h-[816px]  px-20 py-40 flex-col justify-center items-center inline-flex">
            <div className="Container  w-[1440px] h-[496px] p-20 bg-white rounded-[30px] shadow-2xl justify-center items-center gap-20 inline-flex">
                <WhyJoinUs />
                <IconComponent iconType={"deco-video"} fill={"relative"} />
                <DesktopScreen />
                


            </div>
        </div>
    )
}

export default WhyJoinPage