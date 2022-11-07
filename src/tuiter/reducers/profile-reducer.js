import profile from "../profileScreen/profile.json";

const profileData = (state = profile, action) => {
    switch (action.type) {
        case "EditProfile":
            return {...state, ...action.profile};
        default:
            return state;
    }
};

export default profileData;