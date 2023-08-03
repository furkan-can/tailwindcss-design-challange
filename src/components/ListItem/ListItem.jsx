import PropTypes from "prop-types";
import IconComponent from "../IconsComponent/IconComponent ";

const ListItem = ({ text }) => {
    return (
        <div className="ListItemWith justify-center items-center gap-2 inline-flex">
            <IconComponent iconType={"icon-thick"} fill={"relative"} width={24} height={24}></IconComponent>
            <div className="Text text-slate-900 text-xl font-normal leading-9">{text}</div>
        </div>
    )
};

ListItem.propTypes = {
    text: PropTypes.string
};

export default ListItem;