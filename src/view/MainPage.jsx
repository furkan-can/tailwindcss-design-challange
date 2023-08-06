import Header from '../prefabs/Header/Header'
import RectangleSection from '../prefabs/RectangleSection/RectangleSection'
import SneakersSection from '../prefabs/SneakersSection/SneakersSection'


function MainPage() {

    return (
        <div className="bg-doublecolor iphone:max-w-[388px] flex items-center justify-center flex-col iphone:w-screen">
            <Header />
            <SneakersSection />
            <RectangleSection />
        </div>
    )
}

export default MainPage;
