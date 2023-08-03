import PropTypes from "prop-types";
import IconComponent from "../IconsComponent/IconComponent ";

const Button = ({ text, className, iconObj }) => {
    return (
        <>

            <button className={className}>
                {iconObj ? <div className="flex gap-2"><IconComponent iconType={iconObj.iconType} width={iconObj.width} height={iconObj.height} fill={iconObj.color}/> {text} </div>: <>{text}</>}
                
            </button>
        </>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    iconObj: PropTypes.object
}



export default Button;