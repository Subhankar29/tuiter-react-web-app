import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="wd-div-one ">
                <div class="wd-search-bar">
                    <i class="fa fa-search wd-icon-search" aria-hidden="true"></i>
                    <label>
                        <input class="wd-toolbar-search-rounded wd-search-white wd-placeholder" type="text" placeholder="Search Twitter">
                    </label>
                </div>

                <div class="wd-setting-container container-fluid col-2">
                    <form action="settings.html">
                        <button class="wd-button-setting">
                            <i class="fa fa-thin fa-cog fa-1x wd-setting-on1"></i>
                        </button>
                    </form>
                </div>
            </div>

            <div class="col wd-nav-width wd-nav-top-margin">
                <ul class="nav nav-tabs col-12 col-xl-12">
                    <li class="nav-item">
                        <a class="nav-link active wd-override-active wd-color-white" href="./for-you/index.html">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-color-grey" href="./tranding/index.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-color-grey" href="./news/index.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-color-grey" href="./sports/index.html">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-color-grey d-xs-none d-sm-none d-md-block" href="entertainment">Entertainment</a>
                    </li>
                </ul>
            </div>

            <div>
                <img src="../res/starship.jpg" class="wd-main-image-width pt-3"
                     alt="Responsive image">
                <div class="overlay">
                    <h4 class="wd-bold-text wd-color-white wd-font-size-xl">SpaceX's Starship</h4>
                </div>
            </div>

            ${PostSummaryList()}    
`);
}
export default ExploreComponent;