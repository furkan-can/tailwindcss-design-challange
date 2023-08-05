import PropTypes from "prop-types";

const GrowHeader = ({ headline, paragraph }) => {
  return (
    <div className="w-[1280px] self-stretch h-[152px] flex-col justify-start items-start gap-8 inline-flex">
      <div className="Top self-stretch h-[62px] flex-col justify-start items-start gap-2 flex">
        <div className="SecondaryHeadline self-stretch text-slate-900 text-[56px] font-extrabold leading-[61.60px]">
          {headline}
        </div>
      </div>
      <div className="w-[1280px] text-slate-900 pr-16 text-lg font-normal leading-[28.80px]">
        {paragraph}
      </div>
    </div>
  );
};

GrowHeader.propTypes = {
    headline: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
};


export default GrowHeader;
