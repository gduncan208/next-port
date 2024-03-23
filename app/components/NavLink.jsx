
const { default: Link } = require("next/link")

const NavLink = ({ href, title }) => {
    return (
        <Link
            href={href}
            >
                {title}
        </Link>
    );
};

export default NavLink;