import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileScreen = () => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const profile = useSelector((state) => state.ProfileScreenReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "set-parameter", changeState: "profile" });
    });
    return (<div className ="col-12 mt-2">
            <div className="row">
                <h4 className="fw-bold d-inline">{profile.firstName} {profile.lastName}</h4>
                <p className="wd-handle-one-profile">5,634 Tweets</p>
                <img src = {profile.bannerPicture} className ="wd-img-one w-100% position-relative"/>
            </div>
            <div className ="pt-3">
                <Link to="/tuiter/edit-profile">
                    <button
                        className="btn btn-secondary float-end rounded-pill pt-2"
                        style={{ backgroundColor: "transparent", color: "black" }}>
                        Edit Profile
                    </button>
                </Link>
            </div>
            <div className="pt-5">
                <h4 className="fw-bold pt-3">{profile.firstName} {profile.lastName}</h4>
                <p className="wd-handle-one-profile-two">{profile.handle}</p>
                <p className="wd-bio-one">{profile.bio}</p>
            </div>
            <div className="pt-1 wd-extra">
                <div><i className="fa fa-map-marker"> { profile.location + "   "}</i></div>
                <div>
                    <i className="fa fa-birthday-cake ms-3">{"  Born " +new Date(profile.dateOfBirth + " 4:00:00").toLocaleDateString(undefined,
                        {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}</i>
                </div>
                <div>
                    <i className="fa fa-calendar ms-3">{" Joined " +months[parseInt(profile.dateJoined.split("/")[0]) - 1] +", " +
                        profile.dateJoined.split("/")[1]}</i>
                </div>
            </div>

            <div className="pt-3 wd-extra">
                <div><p className="fw-bold"> {profile.followingCount  }</p></div>
                <div><p className="wd-b"> Following</p></div>
                <div><p className="fw-bold wd-a"> {profile.followersCount}</p></div>
                <div><p className="wd-b">Followers</p></div>
            </div>
        </div>


    );
};
export default ProfileScreen;
