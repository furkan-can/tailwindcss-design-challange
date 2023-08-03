import PropTypes from "prop-types"

const IconComponent = ({ iconType, width, height, fill }) => {
  let svgCode;

  switch (iconType) {
    case 'play':
      svgCode = (
        <div className={fill}>
          <svg viewBox="-2 -2 24 24" width={width} height={height} fill="currentColor">
            <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm4.126-6.254l-4.055 2.898c-.905.646-2.13.389-2.737-.576A2.201 2.201 0 0 1 7 12.898V7.102C7 5.942 7.883 5 8.972 5c.391 0 .774.124 1.099.356l4.055 2.898c.905.647 1.146 1.952.54 2.917a2.042 2.042 0 0 1-.54.575zM8.972 7.102v5.796L13.027 10 8.972 7.102z"></path>
          </svg>
        </div>
      );
      break;

    case 'rectangle25':
      svgCode = (
        <div className={fill}>
          <svg width={width} height={height} viewBox="0 0 57 39" fill="currentColor">
            <path opacity="0.5" d="M3.07107 17.4973C-3.22858 11.1977 1.23308 0.42627 10.1421 0.42627H46.7107C55.6197 0.42627 60.0814 11.1977 53.7817 17.4973L35.4975 35.7816C31.5922 39.6868 25.2606 39.6868 21.3553 35.7816L3.07107 17.4973Z" fill="#0369A1" />
          </svg>
        </div>
      );
      break;

    case 'rectangle26':
      svgCode = (
        <div className={fill}>
          <svg width={width} height={height} viewBox="0 0 39 39" fill="currentColor">
            <path opacity="0.5" d="M21.9283 3.07106C28.228 -3.22859 38.9994 1.23309 38.9994 10.1421L38.9994 29C38.9994 34.5229 34.5222 39 28.9994 39L10.1415 39C1.23244 39 -3.22922 28.2286 3.07043 21.9289L21.9283 3.07106Z" fill="#15803D" />
          </svg>

        </div>
      );
      break;

    case 'rectangle27':
      svgCode = (
        <div className={fill}>
          <svg width={width} height={height} viewBox="0 0 45 45" fill="currentColor" >
            <rect opacity="0.5" x="0.000671387" width="45" height="45" rx="20" fill="#A21CAF" />
          </svg>
        </div>
      );
      break;


    case 'icon-trophy':
      svgCode = (
        <div className={fill}>
          <svg width={width} height={height} viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.9875 10.6665H46.1685C46.1685 10.6665 43.8202 46.0188 32.0781 46.0188C26.342 46.0188 22.8476 37.5825 20.7736 28.9521C18.6019 19.9157 17.9875 10.6665 17.9875 10.6665Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M46.1685 10.6664C46.1685 10.6664 48.6251 8.04598 50.6667 7.99974C54.6667 7.90918 55.4061 10.6664 55.4061 10.6664C56.1891 12.2918 56.8152 16.5179 53.0579 20.4188C49.3003 24.3198 45.0941 27.7331 43.3824 28.952" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.9874 10.6669C17.9874 10.6669 15.4279 8.01662 13.3332 8.00027C9.33321 7.96904 8.59371 10.6669 8.59371 10.6669C7.81089 12.2923 7.18465 16.5183 10.9421 20.4193C14.6996 24.3203 19.062 27.7336 20.7734 28.9528" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.6843 53.3334C22.6843 48.4572 32.0779 46.019 32.0779 46.019C32.0779 46.019 41.4717 48.4572 41.4717 53.3334H22.6843Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
      break;

    case 'icon-tunnel':
      svgCode = (
        <div className={fill}>
          <svg width={width} height={height} viewBox="0 0 65 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M53.6667 53.3332L11 39.9998M53.6667 53.3332H11V39.9998L53.6667 53.3332ZM53.6667 53.3332V31.9998C53.6667 20.2178 44.1155 10.6665 32.3333 10.6665C30.2152 10.6665 28.1693 10.9752 26.2381 11.5499C17.4259 14.1726 11 22.3358 11 31.9998V39.9998L53.6667 53.3332Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43 24V26.6667" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M32.3333 21.3335V24.0002" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M21.6667 18.6665V21.3332" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );
      break;

    case 'icon-tv':
      svgCode = (
        <div className={fill}>
          <svg width={width} height={height} viewBox="0 0 65 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.00002 53.3332V23.9998C6.00002 21.0543 8.38783 18.6665 11.3334 18.6665H54C56.9456 18.6665 59.3334 21.0543 59.3334 23.9998V53.3332C59.3334 56.2788 56.9456 58.6665 54 58.6665H11.3334C8.38783 58.6665 6.00002 56.2788 6.00002 53.3332Z" stroke="#78350F" strokeWidth="1.5" />
            <path d="M23.3334 6.6665L32.6667 15.9998L42 6.6665" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
      break;

    default:
      svgCode = null;
  }

  return (
    <>{svgCode}</>
  );
};



IconComponent.propTypes = {
  iconType: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

export default IconComponent;