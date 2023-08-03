import PropTypes from "prop-types"


const ContentBox = ({ assets, title, paragraph }) => {
    return (
        <div className="ContentBox h-[205px] flex-col justify-start items-start flex">
            <div className="Content self-stretch h-[205px] flex-col justify-start items-start gap-4 flex">
                <div className="Icon ml-8 mb-4 justify-center items-center inline-flex relative">
                    {assets.icon}
                    {assets.rectangle}
                </div>
                <div className="TitleCategory self-stretch h-[22px] flex-col justify-start items-start gap-1 flex">
                    <div className="TitleContainer self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="Title grow shrink basis-0 text-slate-900 text-xl font-medium leading-snug">
                            {title}
                        </div>
                    </div>
                </div>
                <div className="Paragraph self-stretch text-slate-900 text-lg font-normal leading-[28.80px]">
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