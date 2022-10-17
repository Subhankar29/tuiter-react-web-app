
alert("Hello World");
import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from './ExploreComponent.js';
import  WhoToFollowList from "../WhoToFollowList/index.js";


function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row">
        ${NavigationSidebar()}
  <div class="col-6 col-sm-10 col-md-10 col-lg-6 col-xxl-6 col-xl-6 col-xs-10 border border-top-2 border-secondary">
   ${ExploreComponent()}
  </div>
  
  <div class="col-4 pt-3 d-none d-none d-sm-none d-md-none d-lg-block d-xl-block col-lg-5 col-xl-4">
  <div class="list-group d-none d-lg-block list-group-item-info override-bs3 ps-3 top-border-radius">
                Who to follow
  </div>
  ${WhoToFollowList()}
  </div>
  </div>

   `);
}
$(exploreComponent);
