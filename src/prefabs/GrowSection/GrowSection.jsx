import PropTypes from "prop-types";

const GrowSection = ({ children }) => {
    return (
        <div className="Section w-[1440px] h-[996px] iphone:h-[724px] iphone:items-start iphone:justify-start iphone:w-full iphone:px-4 iphone:pt-12 iphone:pb-24 iphone:gap-8 px-20 pt-20 pb-32 flex-col justify-center items-center gap-20 inline-flex">
            {children}
        </div>
    );
};

GrowSection.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GrowSection;
