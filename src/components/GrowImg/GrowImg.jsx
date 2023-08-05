import PropTypes from "prop-types";

const GrowImg = ({ imageSrc, classNameImg }) => {
  return (
      <img className={classNameImg} src={imageSrc} />
  );
};

GrowImg.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  classNameImg: PropTypes.string,
};

export default GrowImg;
