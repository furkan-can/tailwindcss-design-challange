import PropTypes from "prop-types";

const CollectedSection = ({ children }) => {
    return (
        <div className="w-full justify-center items-center flex iphone:w-screen iphone:overflow-hidden">
            <div className="w-[1440px] h-[717px] px-20 bg-amber-900 flex-col iphone:px-0  overflow-visible iphone:relative iphone:min-w-[1140px] iphone:h-[833px] justify-center relative items-center gap-20 inline-flex">
                <img src="src/assets/maps.svg" alt="map" className="w-[1440px] px-20 iphone:px-0 iphone:pt-28 iphone:left-[375px] iphone:absolute iphone:text-start text-center" />
                {children}
            </div>
        </div>
    );
};

CollectedSection.propTypes = {
    children: PropTypes.node,
};

export default CollectedSection;
