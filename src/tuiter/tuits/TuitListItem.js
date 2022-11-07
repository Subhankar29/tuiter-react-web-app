import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";

const TuitListItem = ({
                          post = {
                              _id: "123",
                              topic: "Web Development",
                              postedBy: {
                                  username: "ReactJS",
                              },
                              liked: true,
                              verified: false,
                              handle: "ReactJS",
                              time: "2h",
                              title:
                                  "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                              tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                              attachments: {
                                  video: "unKvMC3Y1kI",
                              },
                              "logo-image": "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg",
                              "avatar-image": "https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg",
                              stats: {
                                  comments: 123,
                                  retuits: 234,
                                  likes: 345,
                              },
                          },
                      }) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: "delete-tuit", tuit});
    };
    const likeTuit = (tuit) => {
        dispatch({type: "like-tuit", tuit});
    };


    return (
        <>
            <div
                className="wd-post row align-item-start justify-content-start">
                <div className="pt-2 col-2">
                    <img
                        className="rounded-circle wd-img wd-img-width-all wd-make"
                        src={post["logo-image"] ? post["logo-image"] : ""}
                        width="40px"
                        height="40px"
                    />
                </div>

                <div className="row">
                    <div className="col-10 d-inline">
                        <div className="wd-caption wd-user" style={{width: "120%"}}>
                            <p className="fw-bold d-inline wd-grey-one">{post.postedBy.username}</p>
                            <p className="wd-grey-two d-inline wd-up">@{post.handle}</p>
                            <p className="d-inline wd-grey-two">-{post.time}</p>
                            <i onClick={() => deleteTuit(post)} className="fa fa-times fa-lg wd-aappaak"></i>
                        </div>

                    </div>


                    <div className="wd-caption">
                        <p className="wd-black wd-caption-width">{post.tuit}</p>
                    </div>


                    <div className="pt-2 wd-attachments">
                        {post.attachments && post.attachments.image && (
                            <img
                                width="92%"
                                height="100%"
                                src={post.attachments.image ? post.attachments.image : ""}
                            />
                        )}
                        {post.attachments && post.attachments.video && (
                            <iframe
                                style={{
                                    borderRadius: "16px",
                                    border: "2px solid rgb(47, 51, 54)",
                                }}

                                width="98%"
                                height="300px"
                                src={`https://www.youtube.com/embed/${post.attachments.video}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>

                    <TuitStats tuit={post}/>
                </div>
                <hr/>
            </div>

        </>
    );
};
export default TuitListItem;