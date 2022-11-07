import React from "react";
import {useSelector} from "react-redux";
import TuitListItem from "./TuitListItem";

const TuitList = () =>{
    const tuitsHome = useSelector(state => state.tuits);
    console.log(tuitsHome);
    return (

        <>
            <div className="wd-bg-list wd-border-curved wd-102">
                {tuitsHome.map((element) => {
                    return <TuitListItem key={element._id} post={element}/>;
                })}
            </div>
        </>
    );
}

export default TuitList;

