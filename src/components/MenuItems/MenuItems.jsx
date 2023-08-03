import PropTypes from "prop-types"

const MenuItems = (props) => {
    return (
        <ul className="gap-4 flex items-center">
            {props.children}

        </ul>
    )
}



MenuItems.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default MenuItems;