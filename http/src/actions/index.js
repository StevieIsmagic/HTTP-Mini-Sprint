import axios from 'axios'; // actions get bound to individual components via mapDispatchToProps

export const GET_FRIENDS = 'GET_FRIENDS'; // variable created in order
// to safeguard against string  ^ typos  

export const getFriends = () => {
    const promise = axios.get('http://localhost:5000/friends');
    return {
        type: GET_FRIENDS,
        payload: promise
    };
};