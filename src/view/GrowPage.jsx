
import GrowSection from '../prefabs/GrowSection/GrowSection';
import GrowHeader from '../components/GrowHeader/GrowHeader';
import Button from '../components/Button/Button';
import GrowImg from '../components/GrowImg/GrowImg';
import IconComponent from '../components/IconsComponent/IconComponent ';

const GrowPage = () => {
    return (
        <div className='w-full flex justify-center items-center relative z-[2]'>
            <GrowSection>
                <GrowHeader
                    headline="Grow your collection"
                    paragraph="Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus."
                />
                <div className=" self-stretch justify-start items-start gap-20 inline-flex">
                    <div className=" w-64 h-14 flex-col p-4 rounded-lg justify-start gap-4  flex">
                        
                        <Button text={"Bibendum tellus"} className={"bg-white rounded-lg shadow-2xl p-4 w-64 h-14 text-slate-900 text-xl font-medium leading-normal tracking-wide"}
                            iconObj={{
                                iconType: "icon-search",
                                width: 24,
                                height: 24,
                                color: "text-amber-900"
                            }}
                            iconObj2={{
                                iconType: "icon-left-arrow",
                                width: 24,
                                height: 24,
                                color: "text-amber-900"
                            }} />

                        <Button text={"Cras eget"} className={" text-slate-900 p-4 w-64 h-14 text-xl font-medium leading-normal tracking-wide"}
                            iconObj={{
                                iconType: "icon-thick-outline",
                                width: 24,
                                height: 24,
                                color: "text-amber-900"
                            }}
                        />
                        <Button text={"Dolor pharetra"} className={" text-slate-900 p-4 w-64 h-14 text-xl font-medium leading-normal tracking-wide"}
                            iconObj={{
                                iconType: "icon-rocket",
                                width: 24,
                                height: 24,
                                color: "text-amber-900"
                            }}
                        />
                        <Button text={"Amet, fringilla"} className={" text-slate-900 p-4 w-64 h-14 text-xl font-medium leading-normal tracking-wide"}
                            iconObj={{
                                iconType: "icon-pc",
                                width: 24,
                                height: 24,
                                color: "text-amber-900"
                            }}
                        />
                        <Button text={"Amet nibh"} className={" text-slate-900 p-4 w-64 h-14 text-xl font-medium leading-normal tracking-wide"}
                            iconObj={{
                                iconType: "icon-circle-outline",
                                width: 24,
                                height: 24,
                                color: "text-amber-900"
                            }}
                        />
                        <Button text={"Sed velit"} className={" text-slate-900 p-4 w-64 h-14 text-xl font-medium leading-normal tracking-wide"}
                            iconObj={{
                                iconType: "icon-settings",
                                width: 24,
                                height: 24,
                                color: "text-amber-900"
                            }}
                        />
                    </div>
                    <div className=" w-[944px] h-[556px] flex-col justify-start items-start gap-2.5 inline-flex relative">
                        <div className="w-[759px] h-[451px] bg-white rounded-[20px] shadow border-2 border-white flex-col justify-start items-center flex">
                            <GrowImg classNameImg={" select-none self-stretch grow shrink basis-0 shadow"} imageSrc="src/assets/screen2.png" />
                        </div>
                        <div className="w-[759px] h-[451px] top-[6rem] absolute left-[6rem] bg-white rounded-[20px] shadow border-2 border-white flex-col justify-start items-center flex">
                            <GrowImg classNameImg={` select-none self-stretch grow shrink basis-0 shadow`} imageSrc="src/assets/screen3.png" />
                        </div>
                        <GrowImg classNameImg={` select-none w-64 h-[286px] absolute bottom-[5rem] right-0 rounded-[10px] shadow border-2 border-white`} imageSrc="src/assets/ass1.png" />
                    </div>
                </div>
                <div className='w-[1440px] h-[684px] '>
                    <IconComponent fill={"absolute bottom-0 z-[-1]  "} iconType={"vector10"} />
                    <IconComponent fill={"absolute bottom-0 z-[-1]"} iconType={"vector11"} />
                    <IconComponent fill={"absolute bottom-0 z-[-1]"} iconType={"vector12"} />
                </div>
            </GrowSection>
        </div>
    );
};

export default GrowPage;
