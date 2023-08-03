import ContentBox from "../ContentBox/ContentBox"
import PropTypes from "prop-types"

const ContentRow = ({ items }) => {
    return (
        <div className="Row w-full justify-start items-start gap-20 inline-flex">
            {items.map((item, index) => (
                <div className="Group  grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex" key={index}>
                    <ContentBox assets={item.assets} title={item.title} paragraph={item.paragraph} />
                </div>
            ))}
        </div>

    );
}

ContentRow.propTypes={
    items:PropTypes.array,
}

export default ContentRow;