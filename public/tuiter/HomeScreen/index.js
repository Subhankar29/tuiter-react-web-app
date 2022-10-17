import NavigationSideBar from "../NavigationSideBar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/PostList.js";


(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
                ${NavigationSideBar('home')}
            <div class="col-6 col-sm-10 col-md-10 col-lg-6 col-xxl-6 col-xl-6 col-xs-10 wd-mr-left mt-3 wd-move-l">
                   ${PostList()}
            </div>
                    
            <div class="col-4 pt-3 d-none d-none d-sm-none d-md-none d-lg-block d-xl-block col-lg-5 col-xl-4 mt-3">
                ${PostSummaryList()}
            </div>
    
        </div>
    `);
})($);