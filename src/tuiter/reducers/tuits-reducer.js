import {createSlice} from "@reduxjs/toolkit";
import tuits from "../tuits/tuits-home.json";

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits
});

export default tuitsSlice.reducer;

