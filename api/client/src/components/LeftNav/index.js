import React from "react";
import NavItem from "./navitem";

function LeftNav() {
    return (
            <div className="w-small mt-5 bg-lightblue">
                <ul className="nav nav-pills flex-column mb-auto pt-2">
                    {/*{NavItem("/Register","Home")}*/}
                    {NavItem("/","Messages")}
                    {NavItem("/Calendar","Calendar")}
                    {NavItem("/","Documents")}
                    {NavItem("/","Orientation")}
                    {NavItem("/Directory","People Directory")}
                </ul>
            </div>
    );
}

export default LeftNav;