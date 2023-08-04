import HeadLine from "../components/HeadLine/HeadLine"
import ArrowButton from "../components/ArrowButton/ArrowButton"
import ContentBar from "../components/ContentBar/ContentBar"
import { useRef } from "react";
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import IconComponent from "../components/IconsComponent/IconComponent ";


const LoveUsPage = () => {

    const slideItem = [
        {
            icon: <IconComponent iconType="icon-kontastr" />,
            title: "kontrastr",
            description: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
            user: { name: "Ralph Edwards", role: "Product Designer", imageUrl: "/src/assets/user1.png" },
        },
        {
            icon: <IconComponent iconType="icon-zoomerr" />,
            title: "Zoomerr",
            description: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
            user: { name: "Hellen Jummy", role: "Team Lead", imageUrl: "/src/assets/user2.png", }
        },
        {
            icon: <IconComponent iconType="icon-shells" />,
            title: "SHELLS",
            description: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
            user: { name: "Hellena John", role: "Co-founder", imageUrl: "/src/assets/user3.png" },
        },
        {
            icon: <IconComponent iconType="icon-artvenue" />,
            title: "ArtVenue",
            description: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
            user: { name: "David Oshodi", role: "Manager", imageUrl: "/src/assets/user4.png" },
        },
        {
            icon: <IconComponent iconType="icon-waves" />,
            title: "WAVES",
            description: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
            user: { name: "Charolette Hanlin", role: "CEO", imageUrl: "/src/assets/user5.png" },
        },
    ];
    const items = [
        ...slideItem.map((item) => <ContentBar key={item.index} {...item} />),
    ];



    const carousel = useRef();
    const responsive = {
        1360: { items: 5 },
        385: { items: 1 }
    }

    return (
        <div className="w-full justify-center items-center flex p-20">
            <div className=" overflow-hidden Section relative w-[1440px] h-[732px] flex-col gap-20 inline-flex px-10">
                <div className="Row self-stretch justify-start items-center gap-12 inline-flex">
                    <div className="SectionText grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                        <div className="self-stretch h-[62px] flex-col justify-start items-start gap-2 flex px-10">
                            <HeadLine />
                        </div>
                    </div>
                    <div className="Arrows justify-start items-start px-10 gap-6 flex">
                        <ArrowButton direction="left" handleArrowClick={(e) => carousel?.current?.slidePrev(e)} />
                        <ArrowButton direction="right" handleArrowClick={(e) => carousel?.current?.slideNext(e)} />
                    </div>
                </div>
                <div className=" Rectangle28 w-[1360px] h-[421px] z-[1] bg-amber-200 " >

                    <div className='iphone:w-5/6 iphone:mt-48 mt-20 w-[2040px] h-[430px] flex absolute left-[-290px] overflow-hidden top-[6rem]'>
                        <AliceCarousel ref={carousel} disableDotsControls
                            disableButtonsControls responsive={responsive} infinite items={items} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoveUsPage;