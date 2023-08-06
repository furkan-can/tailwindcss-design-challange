import SneakersPic from "../../assets/sneakers.png"
const SneakersSectionImage = () => {
    return (
        <div className="w-[486px] h-[423px] relative iphone:w-[390px]">
            <div className="w-[367px] h-[372px] iphone:w-[272.61px] iphone:h-[276.32px] left-[51px] top-[51px] absolute iphone:top-[40px] bg-amber-400 rounded-[50px]" />
            <img className="w-[486px] h-[388px] iphone:w-[361px] iphone:h-[288.21px] left-0 top-0 iphone:left-[0px] iphone:top-[0px] absolute" src={SneakersPic} />
        </div>
    );
};

export default SneakersSectionImage;
