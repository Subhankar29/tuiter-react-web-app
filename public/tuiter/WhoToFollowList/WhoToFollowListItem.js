import who from "./Who.js";
const WhoToFollowListItem = (who) => {
    return(`<div class="list-group-item">
                <div class="row">
                    <div class="col-2">
                        <img src= ${who.avatarIcon}
                             class="wd-image-icon rounded-circle"
                        />
                    </div>
                    <div class="col-7">
                        <div class="wd-float-left wd-text-bold wd-side-column-font-size">${who.userName}</div>
                        <i class="fa fa-check-circle wd-float-left pt-1"></i>
                        <br>
                        <div class="wd-title wd-side-column-font-size">${who.handler}</div>

                    </div>
                    <div class="col-3">
                        <div class="row">
                            <button type="button" class="btn btn-primary wd-bt-white fw-bold rounded-pill override-bs2">Follow</button>
                        </div>
                    </div>
                </div>
            </div>`);
}
export default WhoToFollowListItem;