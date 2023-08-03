import SneakersPic from "../../assets/sneakers.png"
const SneakersSectionImage = () => {
    return (
        <div className="Col w-[486px] h-[423px] relative">
            <div className="Picture w-[367px] h-[372px] left-[51px] top-[51px] absolute bg-amber-400 rounded-[50px]" />
            <img className="PexelsPhotoByRayPiedra w-[486px] h-[388px] left-0 top-0 absolute" src={SneakersPic} />
        </div>
    );
};

export default SneakersSectionImage;
