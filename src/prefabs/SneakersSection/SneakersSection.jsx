import SneakersSectionText from "../../components/SneakersSectionText/SneakersSectionText"
import SneakersSectionImage from "../../components/SneakersSectionImage/SneakersSectionImage"


const SneakersSection = () => {
    return (
        <div className="Section w-[1440px] h-[518px] py-20 justify-start items-center gap-20 inline-flex iphone:h-full iphone:w-full iphone:py-12 iphone:flex-col">
            <SneakersSectionText />
            <SneakersSectionImage />
        </div>
    )
}

export default SneakersSection;