import PropTypes from "prop-types";

const GrowHeader = ({ headline, paragraph }) => {
  return (
    <div className="w-[1280px] self-stretch h-[152px] iphone:h-[200px] iphone:w-[361px] iphone:justify-center flex-col justify-start items-start gap-8 inline-flex">
      <div className="Top self-stretch h-[62px] flex-col justify-start items-start iphone:justify-center iphone:h-[35px] gap-2 flex">
        <div className="SecondaryHeadline self-stretch text-slate-900 text-[56px] font-extrabold iphone:text-[32px] iphone:font-bold iphone:leading-9 iphone:text-center leading-[61.60px]">
          {headline}
        </div>
      </div>
      <div className="w-[1280px] text-slate-900 pr-16 iphone:pr-0 text-lg font-normal iphone:leading-snug iphone:text-base iphone:text-center iphone:w-[361px] leading-[28.80px]">
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
