import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext.js"
import { Link } from "react-router-dom";

function HeadNav() {
    const { currentUser, logout } = useContext(AuthContext);
    return (
        <div className="container">
            <div className="pb-4 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end border-bottom">
                <a href="/Landpage" className="d-flex align-items-center mb-2 mt-0 px-2 mb-lg-0 text-decoration-none">
                    <img className="bi me-2" width="100" height="33" src="https://raceplacecom.s3.amazonaws.com/uploads/event/image/57441/85c6a53f-259d-4017-8452-9f6699cab91f.png">
                    </img>
                </a>

                <form className="col-lg-auto mb-3 mb-lg-0 me-lg-3 me-md-auto" role="search">
                    <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                </form>

                <ul className="nav col-12 col-lg-auto mb-2 me-lg-auto text-end">
                    <li><a href="#" className="nav-link px-2 link-secondary">My Pings</a></li>
                    <li><a href="/calendar" className="nav-link px-2 link-dark">My Calendar</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">My Hours</a></li>
                </ul>

                <span> { currentUser?.split("@")[0] } </span>

                <div className="dropdown text-end">
                    <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://w7.pngwing.com/pngs/826/388/png-transparent-sloth-nick-wilde-animation-film-drawing-sloth-miscellaneous-fauna-snout-thumbnail.png"
                             alt="mdo" width="40" height="40"
                             className="rounded-circle"/>
                    </a>
                    <ul className="dropdown-menu text-small">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider"></hr>
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
                {currentUser? <span onClick={logout}> <Link to = "/login">Logout</Link> </span> : <Link to = "/login">Login</Link>}
            </div>
        </div>
    );
}

export default HeadNav;