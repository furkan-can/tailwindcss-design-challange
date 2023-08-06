import PropTypes from "prop-types";


function UserCard({ name, role, imageUrl }) {
    return (

        <div className="UserCard self-stretch pt-4 justify-start items-center gap-4 flex">
            <img className="UserThumb w-16 h-16 rounded-[100px]" src={imageUrl} alt="User thumbnail" />
            <div className="Details grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="Category self-stretch text-black iphone:text-start text-lg font-normal leading-[28.80px]">{name}</div>
                <div className="Category self-stretch text-slate-600 text-base iphone:text-start font-normal leading-snug">{role}</div>
            </div>
        </div>
    );
}

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default UserCard;