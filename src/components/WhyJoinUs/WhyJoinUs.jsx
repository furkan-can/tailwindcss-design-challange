import ListItem from "../ListItem/ListItem";
import Button from "../Button/Button";
const WhyJoinUs = () => {
    return (
        <div className="Col flex-col justify-start items-start gap-6 inline-flex">
            <div className="SectionText h-[62px] flex-col justify-start items-start gap-6 flex">
                <div className="Top self-stretch h-[62px] flex-col justify-start items-start gap-2 flex">
                    <div className="SecondaryHeadline self-stretch text-slate-900 text-[56px] font-extrabold leading-[61.60px]">Why join us</div>
                </div>
            </div>
            <div className="List w-[520px] flex-col justify-start items-start flex">
                <ListItem text="Est et in pharetra magna adipiscing ornare aliquam." />
                <ListItem text="Tellus arcu sed consequat ac velit ut eu blandit." />
                <ListItem text="Ullamcorper ornare in et egestas dolor orci." />
            </div>
            <Button text={"Sign up now"} className={"w-[179px] p-4 px-4 rounded-lg border-2 border-amber-900 text-amber-900 text-xl items-center font-medium leading-normal tracking-wide"} />

        </div>
    )
};

export default WhyJoinUs;