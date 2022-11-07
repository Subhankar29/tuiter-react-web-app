import Nav from "../nav";
import {Routes, Route} from "react-router";
import Assignment7 from "./a7";

function Labs() {

    console.log("123 Assignemnt 7");
    return (
        <div>
            <Nav/>
            <Routes>
                <Route index element={<Assignment7/>}/>
                <Route path ="a7" element = {<Assignment7/>}/>
            </Routes>
        </div>
    );
}
export default Labs;