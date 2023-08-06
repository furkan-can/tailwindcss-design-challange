import WhyJoinUs from "../components/WhyJoinUs/WhyJoinUs"
// import video from "../assets/video.svg"
import IconComponent from "../components/IconsComponent/IconComponent "
import DesktopScreen from "../components/DesktopScreen/DesktopScreen"
const WhyJoinPage = () => {
    return (
        <div className="Section w-full h-[816px] iphone:w-[393px] iphone:h-full iphone:px-4 iphone:pt-4 iphone:pb-14 px-20 py-40 flex-col justify-center items-center inline-flex">
            <div className="Container  w-[1440px] iphone:w-[361px] iphone:h-full iphone:px-4 iphone:py-8 iphone:gap-8 iphone:flex-col h-[496px] p-20 bg-white rounded-[30px] shadow-2xl justify-center items-center iphone:relative iphone:justify-start iphone:pt-20 gap-20 inline-flex">
                <WhyJoinUs />
                <IconComponent iconType={"deco-video"} fill={"deco-video2 relative"} />
                <DesktopScreen />
            </div>
        </div>
    )
}

export default WhyJoinPage