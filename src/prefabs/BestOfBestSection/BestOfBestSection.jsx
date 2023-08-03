import PropTypes from "prop-types";

const BestOfBestSection = ({ children }) => {
  return (
    <div className="py-20 w-full bg-slate-900 border-t border-b border-slate-200 flex-col justify-center items-center gap-[5rem] inline-flex">

      {children}
    </div>
  );
};

BestOfBestSection.propTypes = {
  children: PropTypes.node,
};

export default BestOfBestSection;
