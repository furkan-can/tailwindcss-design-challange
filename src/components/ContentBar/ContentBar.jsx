import PropTypes from "prop-types";
import UserCard from "../UserCard/UserCard";

function ContentBar({ icon, title, description, user }) {
    return (
        <div className="flex flex-col w-96 h-[430px] rounded-[20px] border border-slate-200 bg-white  p-8 gap-4'">
            <div className="w-60 h-16  flex items-center gap-4 text-slate-600 text-2xl font-bold leading-relaxed">
                {icon}
                {title}
            </div>
            <div className="w-80 text-black text-2xl font-normal leading-[38.40px]">
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
