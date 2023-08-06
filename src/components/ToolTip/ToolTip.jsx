import IconComponent from "../IconsComponent/IconComponent ";

const ToolTip = () => {
    return (
        <div className="absolute left-[180px] top-[10px] iphone:left-[425px] iphone:top-[130px] flex-col justify-center items-center flex iphone:w-64 iphone:h-[200px]">
            <img className="Picture z-30 w-64 h-[200px] rounded-[10px] shadow border-transparent" src="src/assets/ass2.png" />
            <div className=" z-20 absolute bottom-[-55px] TooltipToogletip w-[240px] bg-slate-200 rounded-[5px] shadow flex-col justify-start items-start flex">
                <div className="Text self-stretch px-2 pt-4 pb-2 justify-start items-start inline-flex">
                    <div className="Text grow shrink basis-0">
                        <span className="text-slate-900 text-sm font-normal leading-tight">
                            Emma Simpson collected one pair of { }
                        </span>
                        <span className="text-slate-900 text-sm font-medium leading-none">
                            Cool Shoes
                        </span>
                        <span className="text-slate-900 text-sm font-normal leading-tight">
                            .
                        </span>
                    </div>
                </div>
            </div>
            <IconComponent fill={"absolute bottom-[-60px] z-40"} iconType={"speech-bubble"} />
        </div>
    );
};

export default ToolTip;