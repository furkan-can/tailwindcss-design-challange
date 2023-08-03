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
            <div className="w-[1440px] z-[0] relative  inline-flex">
                <IconComponent fill={"z-[-1]"} iconType={"bg-basket"}></IconComponent>
                <div className="flex gap-[8rem]">
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