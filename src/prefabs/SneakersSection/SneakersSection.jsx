import SneakersSectionText from "../../components/SneakersSectionText/SneakersSectionText"
import SneakersSectionImage from "../../components/SneakersSectionImage/SneakersSectionImage"


const SneakersSection = () => {
    return (
        <div className="Section w-[1440px] h-[583px] py-20 justify-start items-center gap-20 inline-flex">
            <SneakersSectionText />
            <SneakersSectionImage />
        </div>
    )
}

export default SneakersSection;