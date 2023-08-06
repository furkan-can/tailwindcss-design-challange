const CollectedContent = () => {
    return (
        <div className="absolute h-44 iphone:h-24 iphone:top-[420px] shadow flex-col justify-center items-center bg-transparent gap-8 flex">
            <div className="Top self-stretch h-44 bg-transparent flex-col justify-start items-start gap-2 flex">
                <div className="MainHeadline self-stretch bg-transparent text-center text-amber-50 text-8xl font-bold iphone:font-extrabold iphone:text-5xl leading-[105.60px] iphone:leading-[52.80px]">
                    11,658,467
                </div>
                <div className="SecondaryHeadline self-stretch bg-transparent iphone:text-[32px] text-center text-amber-50 text-[56px] font-bold iphone:leading-9 leading-[61.60px]">
                    Shoes Collected
                </div>
            </div>
        </div>
    );
}
export default CollectedContent