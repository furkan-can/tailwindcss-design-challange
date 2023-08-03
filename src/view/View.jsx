import Header from '../prefabs/Header/Header'
import RectangleSection from '../prefabs/RectangleSection/RectangleSection'
import SneakersSection from '../prefabs/SneakersSection/SneakersSection'


function View() {

    return (
        <div className="bg-doublecolor flex items-center justify-center flex-col">
            <Header />
            <SneakersSection />
            <RectangleSection />
        </div>
    )
}

export default View
