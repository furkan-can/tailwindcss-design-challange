import BestOfBestSection from "../prefabs/BestOfBestSection/BestOfBestSection"
import Navbar from "../components/Navbar/Navbar"
import ContentBasket from "../components/ContentBasket/ContentBasket"
import IconComponent from "../components/IconsComponent/IconComponent "
import shoes1 from "../assets/shoes1.png"
import shoes2 from "../assets/shoes2.png"
import shoes3 from "../assets/shoes3.png"

const BestOfBestPage = () => {
    return (
        <BestOfBestSection>
            <Navbar />
            <div className="w-[1440px] z-[0] relative inline-flex iphone:w-full iphone:max-w-[388px]">
                <IconComponent fill={"z-[-1] iphone:hidden flex"} iconType={"bg-basket"}></IconComponent>
                <IconComponent fill={"z-[-1] iphone:flex hidden"} iconType={"bg-basket2"}></IconComponent>
                <div className="flex gap-[8rem] iphone:gap-8 iphone:flex-col iphone:w-full iphone:justify-center iphone:items-center iphone:pr-4">
                    <ContentBasket
                        imgSrc={shoes1}
                        title="Title"
                        paragraph="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                    />
                    <ContentBasket
                        imgSrc={shoes2}
                        title="Title"
                        paragraph="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                    />
                    <ContentBasket
                        imgSrc={shoes3}
                        title="Title"
                        paragraph="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                    />
                </div>
            </div>
        </BestOfBestSection>
    )
}

export default BestOfBestPage;