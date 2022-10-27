import PostSummaryListItem from "./PostSummaryItem.js";
import post from "./posts.js"
import React from "react";

const PostSummaryList = () => {
    return(
        <div>
            <ul>
                {
                    post.map((p) => {
                        return(<PostSummaryListItem topic={p.topic} userName={p.userName} time={p.time} title={p.title} image={p.image} tweets={p.tweets}/>)
                    })
                }
            </ul>
        </div>

    );
}
export default PostSummaryList;