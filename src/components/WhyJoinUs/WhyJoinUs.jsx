import ListItem from "../ListItem/ListItem";
import Button from "../Button/Button";
const WhyJoinUs = () => {
    return (
        <div className="Col flex-col justify-start items-start iphone:justify-center iphone:items-center gap-6 inline-flex iphone:w-[329px] iphone:h-[287px]">
            <div className="SectionText h-[62px] iphone:h-[35px] flex-col justify-start items-start gap-6 flex">
                <div className="Top self-stretch h-[62px] iphone:h-[35px] flex-col justify-start items-start gap-2 flex">
                    <div className="SecondaryHeadline self-stretch text-slate-900 text-[56px] iphone:text-[32px] iphone:font-bold iphone:leading-9 font-extrabold leading-[61.60px]">Why join us</div>
                </div>
            </div>
            <div className="List w-[520px] iphone:w-[329px] iphone:gap-2 iphone:h-[148px] flex-col justify-start items-start flex">
                <ListItem text="Est et in pharetra magna adipiscing ornare aliquam." />
                <ListItem text="Tellus arcu sed consequat ac velit ut eu blandit." />
                <ListItem text="Ullamcorper ornare in et egestas dolor orci." />
            </div>

            <Button text={"Sign up now"} className={"w-[179px] iphone:z-10 p-4 px-4 iphone:mt-24 rounded-lg border-2 border-amber-900 text-amber-900 text-xl items-center font-medium leading-normal tracking-wide"} />
        </div>
    )
};

export default WhyJoinUs;