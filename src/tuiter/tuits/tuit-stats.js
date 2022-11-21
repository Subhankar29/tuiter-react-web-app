import {useDispatch} from "react-redux";
import {updateTuit} from "../../services/tuits-thunks";
import 'font-awesome/css/font-awesome.min.css';

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    return (

        <div className="wd-fifth-container">

            <div>

                <button className="wd-button">
                    <i className="fa fa-thin fa-comment wd-type-one-button"> {tuit.comments}</i>
                </button>

            </div>
            <div>

                <button className="wd-button">
                    <i className="fa fa-thin fa-retweet wd-type-one-button"> {tuit.retuits}</i>
                </button>

            </div>


            <div>

                <button className="wd-button">

                        <span onClick={() => updateTuit(dispatch, {
                            ...tuit,
                            likes: tuit.likes + 1,
                            liked: true
                        })} className="wd-type-one-button">
                        {
                            tuit.liked &&
                            <i className="fa fa-solid fa-heart wd-type-two"></i>
                        }
                            {
                                !tuit.liked &&
                                <i className="fa fa-solid fa-heart wd-type-one-button"></i>
                            }
                            {tuit.likes}
                        </span>

                </button>

            </div>

            <div>

                <button className="wd-button">

                        <span onClick={() => updateTuit(dispatch, {
                            ...tuit,
                            dislikes: tuit.dislikes + 1
                        })} className="wd-type-one-button">
                            {
                                <i className="fa fa-thumbs-down wd-type-one-button"></i>
                            }
                            {tuit.dislikes}
                        </span>

                </button>

            </div>

            <div>

                <button className="wd-button">
                    <i className=" fa fa-share"></i>
                </button>

            </div>
        </div>
    );
}

export default TuitStats;