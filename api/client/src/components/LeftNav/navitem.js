import React from "react";

function NavItem(href, text) {
    return (
        <li className="nav-item">
            <a href={href} className="nav-link text-dark border-bottom border-secondary rounded-0 py-3" aria-current="page">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                {text}
            </a>
        </li>
    );
}

export default NavItem;