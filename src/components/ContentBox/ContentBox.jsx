import PropTypes from "prop-types"


const ContentBox = ({ assets, title, paragraph }) => {
    return (
        <div className="ContentBox h-[205px] flex-col justify-start items-start iphone:w-full flex iphone:justify-center iphone:items-center">
            <div className="Content iphone:w-full h-[205px] flex-col justify-start items-start iphone:justify-center iphone:items-center gap-4 flex">
                <div className="Icon ml-8 mb-4 iphone:ml-0 justify-center items-center inline-flex relative">
                    {assets.icon}
                    {assets.rectangle}
                </div>
                <div className="TitleCategory  h-[22px] flex-col justify-start iphone:justify-center iphone:items-center items-start gap-1 flex">
                    <div className="TitleContainer  justify-start items-center iphone:justify-center iphone:items-center gap-2 inline-flex">
                        <div className="Title grow shrink basis-0 text-slate-900 text-xl font-medium leading-snug">
                            {title}
                        </div>
                    </div>
                </div>
                <div className="Paragraph iphone:p-0 iphone:justify-center iphone:text-center pr-10 iphone:flex text-slate-900 text-lg font-normal leading-[28.80px]">
                    {paragraph}
                </div>
            </div>
        </div>
    );
}

ContentBox.propTypes = {
    assets: PropTypes.object,
    title: PropTypes.string,
    paragraph: PropTypes.string
}

export default ContentBox;