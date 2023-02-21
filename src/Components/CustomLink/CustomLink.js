import './CustomLink.css'
import { Link, useMatch } from "react-router-dom";

export default function CustomLink({ children, to, className='link' }) {
    const mathc = useMatch(to)

    function isActive() {
        if (mathc) {
            return className + '_active'
        }
    }

    return (
        <Link className={className + ' ' + isActive()} to={to}>{children}</Link>
    )
}