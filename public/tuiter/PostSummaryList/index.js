import PostSummaryListItem from "./PostSummaryItem.js";
import posts from "./posts.js"
const PostSummaryList = () => {
    return (`
            ${
        posts.map(posts => {
            return(PostSummaryListItem(posts));
        }).join('')
    }


`); }
export default PostSummaryList;