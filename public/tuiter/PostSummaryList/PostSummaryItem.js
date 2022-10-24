const PostSummaryItem = (posts) => {
return (`
<div class="row p-4">
    <div class="col-10">
        <div class="row wd-category-top-margin text-secondary wd-color-lightgrey">
            ${posts.topic}
        </div>
        <div class="row d-inline-block">
            <p><span class="fw-bolder wd-move-right wd-color-white">${posts.userName}</span>
                <i class="fa fa-check-circle wd-color-white wd-verified-icon"></i>
                <span class="text-secondary wd-color-lightgrey">-${posts.time}</span>
            </p>
        </div>
        <div class="row fw-bold wd-category-top-margin wd-color-white">
            ${posts.title}
        </div>
        <div class="row text-secondary">
          ${posts.tweets}
        </div>
    </div>
    <div class="col-2">
        <img src= ${posts.image} class="img-fluid">
    </div>
 </div>
`);
}
export default PostSummaryItem;
