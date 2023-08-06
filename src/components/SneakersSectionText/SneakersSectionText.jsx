import Button from "../../components/Button/Button"
const SneakersSectionText = () => {
    return (
        <div className="Col grow shrink basis-0 flex-col justify-start items-start gap-12 flex iphone:w-full iphone:h-[360px]">
            <div className="SectionText self-stretch h-[257px] flex-col justify-start items-start gap-8 flex iphone:h-[360px] iphone:gap-8">
                <div className="Top self-stretch h-[79px] flex-col justify-start items-start gap-2 flex">
                    <div className="w-[714px] iphone:text-center iphone:text-[56px] iphone:w-full text-slate-900 text-7xl font-extrabold leading-[79.20px]">Collectible Sneakers</div>
                </div>
                <div className="w-[714px] iphone:w-full iphone:text-center text-slate-900 text-lg iphone:mt-16 font-normal leading-[28.80px]">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</div>


                <div className="justify-start items-center gap-4 inline-flex iphone:justify-center iphone:w-full  ">
                    <Button text={"Sign up now"} className={"iphone:w-[179px] iphone:h-14 iphone:p-0 w-[179px] p-4 px-4 rounded-lg border-2 border-amber-900 text-amber-900 text-xl items-center font-medium leading-normal tracking-wide"} />

                    <Button text={"Watch Demo"} className={"iphone:w-[152px] iphone:h-12 w-[152px] px-2 py-3 text-amber-900 text-base items-center font-medium leading-normal tracking-wide"}
                        iconObj={{
                            iconType: "play",
                            width: 24,
                            height: 24,
                            color: "text-amber-900"
                        }} />
                </div>
            </div>
        </div>
    );
};

export default SneakersSectionText;
