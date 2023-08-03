import PropTypes from "prop-types"

const MenuItem = ({ text }) => {
    return (
        <li className="px-2 py-3 items-center gap-2 flex">
            <a href="#" className="text-amber-900 text-base font-medium leading-normal tracking-wide" aria-current="page">{text}</a>
        </li>
    )
}

MenuItem.propTypes = {
    text: PropTypes.string
}

export default MenuItem;