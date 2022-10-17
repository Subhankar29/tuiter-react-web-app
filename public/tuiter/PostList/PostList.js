import PostItem from "./PostItem.js";
import posts from "./posts.js"
const PostList = () => {
    return (`
            ${
        posts.map(posts => {
            return(PostItem(posts));
        }).join('')
    }


`); }
export default PostList;
