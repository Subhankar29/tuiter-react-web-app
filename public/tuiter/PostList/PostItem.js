const PostItem = (posts) =>  {
    return(`
<div class="row">
<div class="col-11">
<div class ="row">
        <div class="col-2">
           <img src = ${posts.dp} class="rounded-circle wd-img wd-img-width-all"/>
        </div>

    <div class="col-8 d-inline wd-user">
        <div class ="col">
        <div class ="wd-caption">
        <p class = "fw-bold d-inline wd-white">${posts.name}</p><i class="fa fa-check wd-white d-inline p-2"></i>
        <p class = "wd-grey d-inline">${posts.handle}</p>
        <p class = "d-inline wd-grey">-${posts.timeOfTweet}</p>

        </div>
        </div>
        <div class ="wd-caption">
        <p class ="wd-white wd-caption-width">${posts.mainTitle}</p>
        </div>
    </div>
    <div class ="col-2">
    <i class="fa fa-ellipsis-h fa-lg wd-ellipse wd-grey wd-float-right"></i>
    </div>

    ${posts.title === ''?
        `<div class="wd-main-img-three position-relative">
                         <img src = ${posts.imageSrc} class="wd-main-img-two"/>
                         </div>` :
        `<div class="wd-main-img position-relative">
                             <img src = ${posts.imageSrc} class="wd-main-img-one img-fluid"/>
                             </div>
                             <div class ="wd-content-title">
                             <p class ="wd-title wd-white">${posts.title}</p>
                             <p class ="wd-content wd-grey">${posts.post}<?p>
                             </div>
                         `}


    <div class="wd-fifth-container">

            <div>
                <form action="#">
                    <button class="wd-button">
                        <i class="fa fa-thin fa-comment wd-type-one"> ${posts.comments}</i>
                    </button>
                </form>
            </div>
            <div>
                <form action="#">
                    <button class="wd-button">
                        <i class="fa fa-thin fa-retweet wd-type-one"> ${posts.retweets}</i>
                    </button>
                </form>
            </div>
            <div>
                <form action="#">
                    <button class="wd-button">
                        <i class="fa fa-solid fa-heart wd-type-two"> ${posts.likes}</i>
                    </button>
                </form>
            </div>
            <div>
                <form action="#">
                    <button class="wd-button">
                        <i class=" fas fa-upload wd-type-one"></i>
                    </button>
                </form>
            </div>
        </div>
</div>
</div>
</div>
<hr>
 `);
}
export default PostItem;