import {Link} from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
function Tuiter() {
    return(
        <div>
            <Nav/>
            <NavigationSidebar active="home"/>
            <WhoToFollowListItem/>
            <h1>Tuiter</h1>
        </div>
    )
}
export default Tuiter