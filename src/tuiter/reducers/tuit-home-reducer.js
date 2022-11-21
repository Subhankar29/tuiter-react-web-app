import {CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT} from "../../services/tuits-thunks";

const tuitsReducer = (state = [],action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        case DELETE_TUIT:
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case UPDATE_TUIT:
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                    action.tuit : tuit
            );
        case CREATE_TUIT:
            return [...state, action.newTuit];
        default:
            return state;
    }
}

export default tuitsReducer;

// import tuits from "../tuits/tuits-home.json";
//
// const tuitHomeReducer = (state = tuits, action) => {
//     switch (action.type) {
//         case 'create-tuit' :
//             const newTuit = {
//                 tuit: action.tuit,
//                 _id : (new Date()).getTime() + '',
//                 "logo-image": "https://www.kindpng.com/picc/m/180-1801331_elon-musk-tesla-motors-chief-executive-spacex-neuralink.png",
//                 "time": "Just now",
//                 "handle": "Subhankar29",
//                 postedBy: {
//                     "username": "Subhankar"
//                 },
//                 stats: {
//                     retuits: 111,
//                     likes: 222,
//                     replies: 333
//                 }
//             }
//
//             return [
//                 newTuit,
//                 ...state,
//             ];
//         case 'delete-tuit':
//             return state.filter(
//                 tuit => tuit._id !== action.tuit._id
//             );
//         case 'like-tuit' :
//             return state.map (
//                 tuit => {
//                     if (tuit._id === action.tuit._id) {
//                         if (tuit.liked === true) {
//                             tuit.liked = false;
//                             tuit.stats.likes--;
//                         } else {
//                             tuit.liked = true;
//                             tuit.stats.likes++;
//                         }
//
//                         return tuit;
//                     } else {
//                         return tuit;
//                     }
//                 }
//             );
//
//         default :
//             return tuits
//     }
// }
//
// export default tuitHomeReducer;
