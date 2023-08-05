import PropTypes from "prop-types";

const CollectedSection = ({ children }) => {
    return (
        <div className="w-full justify-center items-center   flex">
            <div className="w-[1440px] h-[717px] px-20 bg-amber-900 flex-col overflow-visible justify-center relative items-center gap-20 inline-flex">
                <img src="src/assets/maps.svg" alt="map" className="w-[1440px] px-20 text-center" />
                {children}
            </div>
        </div>
    );
};

CollectedSection.propTypes = {
    children: PropTypes.node,
};

export default CollectedSection;
