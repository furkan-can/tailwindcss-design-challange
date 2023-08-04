import PropTypes from "prop-types";
import IconComponent from "../IconsComponent/IconComponent ";

function ArrowButton({ direction, handleArrowClick }) {
    return (
        <button className="Button p-3 rounded-[100px] shadow border border-amber-900 justify-center items-center flex" onClick={() => { handleArrowClick(direction) }}>
            <IconComponent fill={"relative"} iconType={`icon-arrow-${direction}`} ></IconComponent>
        </button>
    );
}

ArrowButton.propTypes = {
    direction: PropTypes.oneOf(["left", "right"]).isRequired,
    handleArrowClick: PropTypes.func.isRequired,
};

export default ArrowButton;