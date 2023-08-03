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

    case 'rectangle28':
      svgCode = (
        <div className={fill}>
          <svg width={width} height={height} viewBox="0 0 85 86" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.75" width="85" height="86" rx="42.5" fill="#15803D" />
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

    case 'icon-basket':
      svgCode = (
        <div className={`${fill} self-center`}>
          <svg width={width} height={height} viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3333 20C9.80287 20 9.29417 19.7893 8.91909 19.4142C8.54402 19.0391 8.33331 18.5304 8.33331 18C8.33331 17.4696 8.54402 16.9609 8.91909 16.5858C9.29417 16.2107 9.80287 16 10.3333 16C10.8637 16 11.3724 16.2107 11.7475 16.5858C12.1226 16.9609 12.3333 17.4696 12.3333 18C12.3333 18.5304 12.1226 19.0391 11.7475 19.4142C11.3724 19.7893 10.8637 20 10.3333 20ZM17.3333 20C16.8029 20 16.2942 19.7893 15.9191 19.4142C15.544 19.0391 15.3333 18.5304 15.3333 18C15.3333 17.4696 15.544 16.9609 15.9191 16.5858C16.2942 16.2107 16.8029 16 17.3333 16C17.8637 16 18.3724 16.2107 18.7475 16.5858C19.1226 16.9609 19.3333 17.4696 19.3333 18C19.3333 18.5304 19.1226 19.0391 18.7475 19.4142C18.3724 19.7893 17.8637 20 17.3333 20ZM4.29531 5.923C4.04567 5.91495 3.80895 5.81012 3.6352 5.63068C3.46146 5.45125 3.36432 5.21127 3.36432 4.9615C3.36432 4.71173 3.46146 4.47175 3.6352 4.29232C3.80895 4.11288 4.04567 4.00805 4.29531 4H5.44631C6.34831 4 7.12831 4.626 7.32431 5.506L8.57731 11.148C8.77331 12.028 9.55331 12.654 10.4553 12.654H17.9673L19.4093 6.884H10.0643C9.81702 6.87272 9.5836 6.76654 9.41259 6.58755C9.24159 6.40857 9.14616 6.17055 9.14616 5.923C9.14616 5.67545 9.24159 5.43743 9.41259 5.25845C9.5836 5.07946 9.81702 4.97328 10.0643 4.962H19.4093C19.7016 4.96191 19.9901 5.02848 20.2529 5.15663C20.5156 5.28479 20.7457 5.47116 20.9256 5.70158C21.1055 5.93201 21.2305 6.20041 21.2911 6.4864C21.3517 6.77238 21.3463 7.06842 21.2753 7.352L19.8333 13.12C19.7294 13.5362 19.4892 13.9057 19.1511 14.1697C18.813 14.4337 18.3963 14.5771 17.9673 14.577H10.4553C9.5801 14.5771 8.73103 14.2787 8.04832 13.7311C7.36561 13.1835 6.89009 12.4194 6.70031 11.565L5.44631 5.923H4.29531Z" fill="white" />
          </svg>
        </div>
      );
      break;

    case 'bg-basket':
      svgCode = (
        <div className={`${fill} w-[1358px] h-[527px] relative`}>
          <div className="Rectangle26 w-[232px] h-[232px] left-[1245px] top-[34px] absolute opacity-75 bg-green-700 rounded-[50px]" />
          <div className="Rectangle25 w-[202px] h-[202px] left-[1157px] top-[300px] absolute opacity-75 bg-fuchsia-700 rounded-[30px]" />
          <div className="Rectangle27 w-[130px] h-[130px] left-[810px] top-[325px] absolute opacity-75 bg-amber-700 rounded-[30px]" />
          <div className="Rectangle25 w-[161px] h-[161px] left-[500px] top-[-40px] absolute opacity-75 bg-sky-700 rounded-[50px]" />
          <div className="Rectangle26 w-[271px] h-[271px] left-[-35px] top-[180px] absolute opacity-75 bg-pink-700 rounded-[50px]" />
        </div>
      );
      break;

    case 'deco-video':
      svgCode = (
        <div className={`${fill} h-[625.24px] relative`}>
          <div className="Rectangle30 w-[666.28px] h-[217.93px] left-0 top-[471.13px] absolute origin-top-left -rotate-45 bg-amber-200" />
          <div className="Rectangle29 w-[74px] h-[74px] left-[458px] top-[453.19px] absolute opacity-75 bg-fuchsia-700 rounded-[30px]" />
          <div className="Rectangle27 w-[90px] h-[90px] left-[55px] top-[158.19px] absolute opacity-75 bg-amber-700 rounded-[30px]" />
          <div className="Rectangle25 w-[59px] h-[60px] left-[513px] top-[45.19px] absolute opacity-75 bg-sky-700 rounded-[50px]" />
          <div className="Rectangle26 w-[218px] h-[218px] left-[495px] top-[374.19px] absolute opacity-75 bg-pink-700 rounded-[50px]" />
        </div>
      );
      break;

    case 'icon-thick':
      svgCode = (
        <div className={`${fill} self-center`}>
          <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.486 16.7299C10.3547 16.7302 10.2247 16.7045 10.1034 16.6544C9.98204 16.6043 9.87181 16.5307 9.77899 16.4379L5.53699 12.1949C5.44141 12.1027 5.36516 11.9924 5.31266 11.8705C5.26017 11.7485 5.23249 11.6173 5.23125 11.4845C5.23 11.3517 5.25521 11.22 5.3054 11.0971C5.3556 10.9742 5.42977 10.8625 5.52359 10.7685C5.61742 10.6746 5.72902 10.6002 5.85188 10.5499C5.97474 10.4995 6.1064 10.4741 6.23918 10.4752C6.37196 10.4762 6.50319 10.5037 6.62523 10.556C6.74727 10.6083 6.85767 10.6845 6.94999 10.7799L10.485 14.3149L16.85 7.95189C17.0375 7.76425 17.2919 7.65879 17.5571 7.65869C17.8224 7.6586 18.0768 7.76389 18.2645 7.95139C18.4521 8.1389 18.5576 8.39327 18.5577 8.65854C18.5578 8.92381 18.4525 9.17825 18.265 9.36589L11.193 16.4379C11.1002 16.5307 10.9899 16.6043 10.8686 16.6544C10.7473 16.7045 10.6173 16.7302 10.486 16.7299Z" fill="#15803D" />
          </svg>

        </div>
      );
      break;

    case 'icon-circle':
      svgCode = (
        <div className={`${fill} self-center`}>
          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 9.69369C2.69875 9.69369 0.833328 7.82827 0.833328 5.52702C0.833328 3.22577 2.69875 1.36035 5 1.36035C7.30125 1.36035 9.16666 3.22577 9.16666 5.52702C9.16666 7.82827 7.30125 9.69369 5 9.69369Z" fill="currentColor" />
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