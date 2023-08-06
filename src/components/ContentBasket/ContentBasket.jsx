import Button from "../Button/Button"
import PropTypes from "prop-types";

const ContentBasket = ({ imgSrc, title, paragraph }) => {
  return (
    <div className=" h-[472px] max-w-[394.67px] iphone:max-w-[361px] grow shrink gap-8 basis-0 bg-slate-900 rounded-[10px] shadow-md shadow-white border border-slate-900 flex-col justify-center items-center inline-flex">
      <img className="Picture h-[220px] w-[394.67px] rounded-t-[10px] border-4 border-slate-900" src={imgSrc} alt="Product" />

      <div className="Content w-[394.67px] iphone:w-[361px] pl-8 self-stretch  flex-col justify-start items-start gap-4 flex">
        <div className="TitleCategory self-stretch  flex-col justify-start items-start gap-1 flex">
          <div className="TitleContainer self-stretch justify-start items-center gap-2 inline-flex">
            <div className=" grow shrink basis-0 text-white text-2xl font-bold leading-relaxed">
              {title}
            </div>
          </div>
        </div>
        <div className="Paragraph self-stretch text-white text-lg font-normal leading-[28.80px]">
          {paragraph}
        </div>
      </div>

      <Button text={"Buy Now"} className={"self-stretch iphone:w-[297px] iphone:h-14 iphone:p-4 w-[330.67px] ml-8 mb-8 gap-4  shrink basis-0 h-14 p-4 rounded-lg border border-white justify-center items-center flex text-white text-xl font-medium leading-normal tracking-wide"}
        iconObj={{
          iconType: "icon-basket",
          width: 24,
          height: 24,
          color: "text-white"
        }} />

    </div>
  );
};

ContentBasket.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string
};

export default ContentBasket;
