import PropTypes from "prop-types";
import UserCard from "../UserCard/UserCard";

function ContentBar({ icon, title, description, user }) {
    return (
        <div className="flex flex-col iphone:inline-block iphone:w-[319px] iphone:h-[296px] w-96 h-[430px] rounded-[20px] border border-slate-200 bg-white iphone:p-6  p-8 gap-4 ">
            <div className="w-60 h-16 iphone:w-[271px] flex items-center iphone:gap-2 gap-4 text-slate-600 text-2xl font-bold leading-relaxed">
                {icon}
                {title}
            </div>
            <div className="w-80 text-black iphone:text-start iphone:w-[271px] iphone:text-base text-2xl font-normal leading-[38.40px]">
                {description}
            </div>
            <UserCard {...user} />
        </div>


    );
}


ContentBar.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,
};

export default ContentBar;
