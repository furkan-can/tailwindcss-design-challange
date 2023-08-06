import PropTypes from "prop-types";

const BestOfBestSection = ({ children }) => {
  return (
    <div className="py-20 iphone:pt-12 iphone:pb-8 w-full iphone:w-screen bg-slate-900  flex-col justify-center items-center gap-[5rem] inline-flex">
      {children}
    </div>
  );
};

BestOfBestSection.propTypes = {
  children: PropTypes.node,
};

export default BestOfBestSection;
