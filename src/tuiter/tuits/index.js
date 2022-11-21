import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitListItem from "./TuitListItem";
import {findAllTuits} from "../../services/tuits-thunks";

const TuitList = () => {
    console.log("TuitList");
    const tuiter = useSelector(state => state.tuitsReducer);
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(findAllTuits)

    }, )

    console.log("Data ---->");
    console.log(tuiter);

    return (
        <>
            <div className ="wd-bg-list wd-border-curved wd-102">
                {tuiter.map((element) => {
                    return <TuitListItem key={element._id} post={element} />;
                })}
            </div>
        </>
    );
}

export default TuitList;

