import PropTypes from "prop-types";
import IconComponent from "../IconsComponent/IconComponent ";

const Button = ({ text, className, iconObj, iconObj2 }) => {
    return (
        <>

            <button className={className}>
                {iconObj2 ? <div className="flex gap-2"><IconComponent iconType={iconObj.iconType} width={iconObj.width} height={iconObj.height} fill={iconObj.color} /> {text} <IconComponent iconType={iconObj2.iconType} width={iconObj2.width} height={iconObj2.height} fill={iconObj2.color} /> </div> : iconObj ? <div className="flex gap-2"><IconComponent iconType={iconObj.iconType} width={iconObj.width} height={iconObj.height} fill={iconObj.color} /> {text} </div> : <>{text}</>}

            </button>
        </>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    iconObj: PropTypes.object,
    iconObj2: PropTypes.object,
}



export default Button;