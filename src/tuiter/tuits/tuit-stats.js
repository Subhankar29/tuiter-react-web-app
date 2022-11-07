import {useDispatch} from "react-redux";
import 'font-awesome/css/font-awesome.min.css';

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };

    return (

        <div className="wd-fifth-container">

            <div>

                <button className="wd-button">
                    <i className="fa fa-thin fa-comment wd-type-one-button"> {tuit.stats.comments}</i>
                </button>

            </div>
            <div>

                <button className="wd-button">
                    <i className="fa fa-thin fa-retweet wd-type-one-button"> {tuit.stats.retuits}</i>
                </button>

            </div>


            <div>

                <button className="wd-button">

                        <span onClick={likeTuit} className="wd-type-one-button">
                        {
                            tuit.liked &&
                            <i className="fa fa-solid fa-heart wd-type-two"></i>
                        }
                            {
                                !tuit.liked &&
                                <i className="fa fa-solid fa-heart wd-type-one-button"></i>
                            }
                            {tuit.stats && tuit.stats.likes}
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