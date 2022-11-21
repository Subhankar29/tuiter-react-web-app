import axios from 'axios';

const TUITS_API = 'http://localhost:4000/api/tuits';

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}
export const findAllTuits = async () => {
    console.log("findAllTuits");
    console.log("Find all tuits");
    const response = await axios.get('http://localhost:4000/api/tuits');
    const tuits = response.data;
    console.log("Find Tuits")
    console.log(tuits);
    return tuits;
}

export const deleteTuit = async (tuit) => {
    const response = await axios.delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
}

export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}