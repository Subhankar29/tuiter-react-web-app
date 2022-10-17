const NavigationSidebar = () => {
    return(`
        <div class="col-2 col-xl-2 col-xxl-2 col-sm-2 col-xs-2 col-md-2 col-lg-1">
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter wd-color-grey"></i>
                </a>
                <a href="./home/index.html" class="list-group-item list-group-item-action d-print-inline">
                    <i class="fa fa-home wd-color-grey"></i>
                    <span class ="d-none d-xl-block wd-category-col wd-color-grey">Home</span></a>
                <a href="#" class="list-group-item list-group-item-action active wd-override-active" aria-current="true">
                    <i class="fa fa-hashtag wd-color-grey"></i>
                    <span class ="d-none d-xl-block wd-category-col wd-color-grey">Explore</span></a>
                <a href="./notification/index.html" class="list-group-item list-group-item-action ">
                    <i class="fa fa-bell-o wd-color-grey"></i>
                    <span class ="d-none d-xl-block wd-category-col wd-color-grey">Notification</span></a>
                <a href="./message/index.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope-o wd-color-grey" aria-hidden="true"></i>
                    <span class ="d-none d-xl-block wd-category-col wd-first-col wd-color-grey">Messages</span></a>
                <a href="./bookmarks/index.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark wd-color-grey"></i>

                    <span class ="d-none d-xl-block wd-category-col wd-color-grey">Bookmarks</span></a>
                <a href="./list/index.html" class="list-group-item list-group-item-action disabled wd-disabled" tabindex="-1"
                   aria-disabled="true">
                    <i class="fa fa-list wd-color-grey"></i>
                    <span class ="d-none d-xl-block wd-category-col wd-color-grey">Lists</span></a>
                <a href="./profile/index.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-user wd-color-grey"></i>
                    <span class ="d-none d-xl-block wd-category-col wd-color-grey">Profile</span></a>
                <a href="./profile/index.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-ellipsis-h wd-color-grey" aria-hidden="true"></i>
                    <span class ="d-none d-xl-block wd-category-col wd-color-grey">More</span></a>
            </div>

            <div class="pt-2 position-relative">

                <form action="./tuit/index.html">
                    <button type="button" class="btn btn-primary rounded-pill w-100 wd-view-port">Tweet</button>
                </form>
            </div>

        </div>

 `);
}
export default NavigationSidebar;
// $('#wd-explore').append(NavigationSidebar());