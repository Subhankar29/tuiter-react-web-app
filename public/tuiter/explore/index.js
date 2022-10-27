import spaceship from '../res/starship.jpg';
import React from "react";
import PostSummaryList from '../PostSummaryList';

const ExploreScreen = () => {
    return(
        <div>
            <div className="row">
                <div className="col-11 wd-input-icons ps-4">
                    <i className="fa fa-search ps-2 pt-2 float-start"></i>
                    <input type="text" className="wd-search-box-dark-mode wd-input-field"
                           placeholder="Search Twitter"/>
                </div>
                <div className="col-1 float-start">
                    <a href="explore-settings.html"><i className="fa fa-cog fa-2x pt-1"></i></a>
                </div>
            </div>

            <div className="row pt-2">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link active"
                            id="for-you-tab"
                            data-mdb-toggle="tab"
                            href="#foryou"
                            role="tab"
                            aria-controls="foryou"
                        >For You</a
                        >
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link"
                            id="trending-tab"
                            data-mdb-toggle="tab"
                            href="#trending"
                            role="tab"
                            aria-controls="trending"
                        >Trending</a
                        >
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link"
                            id="news-tab"
                            data-mdb-toggle="tab"
                            href="#news"
                            role="tab"
                            aria-controls="news"
                        >News</a
                        >
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link"
                            id="sports-tab"
                            data-mdb-toggle="tab"
                            href="#sports"
                            role="tab"
                            aria-controls="sports"
                        >Sports</a
                        >
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link d-none d-md-block"
                            id="entertainment-tab"
                            data-mdb-toggle="tab"
                            href="#entertainment"
                            role="tab"
                            aria-controls="entertainment"
                        >Entertainment</a
                        >
                    </li>
                </ul>
            </div>

            <div className="tab-content">
                <div className="tab-pane active" id="foryou" role="tabpanel" aria-labelledby="for-you-tab">

                    <div className="row ">
                        <div className="wd-container pt-1">
                            <img src={spaceship}
                                 alt="Not able to load"
                                 className="wd-image-border"
                                 width="100%"
                                 height="100%"
                            />
                            <div className="wd-bottom-left">SpaceX's Starship</div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane" id="trending" role="tabpanel" aria-labelledby="trending-tab">
                    Trending
                </div>
                <div className="tab-pane" id="news" role="tabpanel" aria-labelledby="news-tab">
                    News
                </div>
                <div className="tab-pane" id="sports" role="tabpanel" aria-labelledby="sports-tab">
                    Sports
                </div>
                <div className="tab-pane" id="entertainment" role="tabpanel" aria-labelledby="entertainment-tab">
                    Entertainment
                </div>
            </div>

            <div className="pt-2">
                <PostSummaryList/>
            </div>
        </div>
    )
}

export default ExploreScreen;
