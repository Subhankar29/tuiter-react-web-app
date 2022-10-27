import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./HomeScreen";
import {Link} from "react-router-dom";


function Tuiter() {
    return (
        <>
            <div className="row pt-3">
                <div className="col-3 col-lg-2 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-9 col-lg-6 col-xl-6">
                        <Routes>
                            <Route path="home"    element={<HomeComponent/>}/>
                            <Route path="explore" element={<ExploreComponent/>}/>
                        </Routes>
                </div>
                <div className="col-lg-4 col-xl-4 d-none d-lg-block ps-4">
                    <WhoToFollowList/>
                </div>
            </div>

            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>
        </>
    );
}

export default Tuiter