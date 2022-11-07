import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const EditProfile = () => {
    const profile = useSelector((state) => state.ProfileScreenReducer);
    const [data, updateData] = useState(profile);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "set-parameter", changeState: "profile" });
    });
    return (

        <div className ="col-12 mt-2">
            <div style={{height: "10%"}}>
                <Link to="/tuiter/profile">
                    <i className="fa fa-times fa-lg wd-white"></i>
                </Link>
                <h5 className="d-inline ms-5 mt-2">Edit Profile</h5>
                <Link to="/tuiter/profile">
                    <button className="btn btn-light wd-save float-end rounded-pill" onClick={() => {
                        dispatch({ type: "EditProfile", profile: data });
                        <Navigate to="/tuiter/profile"></Navigate>;}}>Save</button>
                </Link>
            </div>

            <div className="pt-3 position-relative">
                <img src = {profile.bannerPicture} className ="img-fluid"/>
                <div className="card-img-overlay">
                    <div className= "wd-over">
                        <i className="fa fa-camera"></i>
                        <i className="fa fa-times ms-4"></i>
                    </div>
                </div>

                <div className="card-img-overlay">
                    <div className= "wd-over-one">
                        <i className="fa fa-camera"></i>
                        <i className="fa fa-times ms-4"></i>
                    </div>
                </div>
            </div>

            <div className ="pt-5">
                <div className="form-floating pt-3">
                    <label for="firstName"><p>First Name</p></label>
                    <input
                        className="form-control wd-fName"
                        id="firstName"
                        type="text" onChange={(event) => updateData({ ...data, firstName: event.target.value })}
                        value={data.firstName}/>
                </div>
                <div className="form-floating pt-3">
                    <label for="lastName"><p>Last Name</p></label>
                    <input
                        className="form-control wd-fName"
                        id="lastName"
                        type="text" onChange={(event) => updateData({ ...data, lastName: event.target.value })}
                        value={data.lastName}/>
                </div>

                <div className="form-floating pt-3">
                    <label for="bio"><p>Bio</p></label>
                    <textarea
                        className="form-control wd-fName"
                        id="bio"
                        style={{height: "30%",}}
                        onChange={(event) => updateData({ ...data, bio: event.target.value })}
                        defaultValue={data.bio}/>
                </div>
                <div className="form-floating pt-3">
                    <label for="location"><p>Location</p></label>
                    <input
                        className="form-control wd-fName"
                        id="location"
                        type="text" onChange={(event) => updateData({ ...data, location: event.target.value })}
                        value={data.location}/>
                </div>

                <div className="form-floating pt-3">
                    <label for="website"><p>Website</p></label>
                    <input
                        className="form-control wd-fName"
                        id="website"
                        type="url" onChange={(event) => updateData({ ...data, website: event.target.value })}
                        value={data.website}/>
                </div>
                <div className="form-floating pt-3">
                    <label for="dob"><p>Date of Birth</p></label>
                    <input
                        className="form-control wd-fName wd-location-one"
                        id="dob"
                        type="date"
                        onChange={(event) =>
                            updateData({ ...data, dateOfBirth: event.target.value })
                        }
                        value={new Date(data.dateOfBirth).toISOString().split("T")[0]}
                    />

                </div>
            </div>


        </div>
    );
};
export default EditProfile;
