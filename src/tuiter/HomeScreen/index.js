import PostItem from "./PostItem";
import post from "./post";
import './index.css';

const HomeScreen = () => {
    return(
        <div>
            <ul className="list-group wd-font-size">
                {
                post.map(p => {
                    return(<PostItem userName={p.userName} handle={p.handle} time={p.time} tagline={p.tagline} profileImage={p.profileImage} descriptionImage={p.descriptionImage} topic={p.topic} description={p.description} link={p.link} linkText={p.linkText} commentsCount={p.commentsCount} retweetsCount={p.retweetsCount} likesCount={p.likesCount}/>)
                })
            }
            </ul>
        </div>
    );
}

export default HomeScreen;