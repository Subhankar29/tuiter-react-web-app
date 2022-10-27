import React from "react";
import {Link} from "react-router-dom";
import home from "../HomeScreen/index"
import {useLocation} from "react-router";

const NavigationSidebar = () => {

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return(
        <div>
            <div className="list-group d-none d-lg-block">
                <Link to= "../"
                      className="list-group-item">
                    <i className="fa fa-twitter fa-2x"></i>
                </Link>
                <Link to= "/tuiter/home"
                      className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home"></i>
                    <span className="d-none d-xl-inline">Home</span>
                </Link>
                <Link to="/tuiter/explore"
                      className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa fa-hashtag"></i>
                    <span className="d-none d-xl-inline">Explore</span>
                </Link>
                <Link to="#"
                      className={`list-group-item ${active === 'notification' ? 'active' : ''}`}>
                    <i className="fa fa-bell"></i>
                    <span className="d-none d-xl-inline">Notifications</span>
                </Link>
                <Link to="#"
                      className={`list-group-item ${active === 'message' ? 'active' : ''}`}>
                    <i className="fa fa-envelope"></i>
                    <span className="d-none d-xl-inline">Messages</span>
                </Link>
                <Link to="#"
                      className={`list-group-item ${active === 'bookmark' ? 'active' : ''}`}>
                    <i className="fa fa-bookmark"></i>
                    <span className="d-none d-xl-inline">Bookmarks</span>
                </Link>
                <Link to="#"
                      className={`list-group-item ${active === 'list' ? 'active' : ''}`}>
                    <i className="fa fa-list"></i>
                    <span className="d-none d-xl-inline">Lists</span>
                </Link>
                <Link to="#"
                      className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fa fa-user"></i>
                    <span className="d-none d-xl-inline">Profile</span>
                </Link>
                <Link to="#"
                      className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                    <i className="fa fa-minus-circle"></i>
                    <span className="d-none d-xl-inline">More</span>
                </Link>
            </div>

            <div className="list-group d-lg-none">
                <Link to="/a6/"
                      className="list-group-item">
                    <i className="fa fa-twitter fa-2x"></i>
                </Link>
                <Link to="/a6/twitter/home"
                      className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home"></i>
                </Link>
                <Link to="/a6/twitter/explore"
                      className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa fa-hashtag"></i>
                </Link>
                <Link to="#"
                      className={`list-group-item ${active === 'notification' ? 'active' : ''}`}>
                    <i className="fa fa-bell"></i>
                </Link>
                <Link to="#"
                      className={`list-group-item ${active === 'message' ? 'active' : ''}`}>
                    <i className="fa fa-envelope"></i>
                </Link>
                <Link to="#"
                      className={`list-group-item ${active === 'bookmark' ? 'active' : ''}`}>
                    <i className="fa fa-bookmark"></i>
                </Link>
                <Link to="#"
                      className={`list-group-item ${active === 'list' ? 'active' : ''}`}>
                    <i className="fa fa-list"></i>
                </Link>
                <Link to="#"
                      className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fa fa-user"></i>
                </Link>
                <Link to="#"
                      className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                    <i className="fa fa-minus-circle"></i>
                </Link>
            </div>
            <div className="row pt-3 pe-2">
                <button type="button" className="btn btn-primary btn-lg btn-block rounded-pill">Tweet</button>
            </div>
        </div>

    );
}
export default NavigationSidebar;
