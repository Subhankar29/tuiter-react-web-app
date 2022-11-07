import './index.css';
import TuitList from "../tuits";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch({type: "set-parameter", changeState: "home"});
    });

    return(
        <div>
            <WhatsHappening/>
           <TuitList/>
        </div>
    );
}

export default HomeScreen;