import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    campsitesArray: CAMPSITES
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
});

export const campsitesReducer = campsitesSlice.reducer;

/* Selects and return the entire array of campsites.
You can export the array by adding export at the beginning of the function. 
export const selectAllCampsites = () => { 
    return CAMPSITES;
};*/
// useSelector has access to the Redux store. It will pass the global state variable to select all campsites, 
// and will receive it via its parameter list.
export const selectAllCampsites = (state) => { 
    return state.campsites.campsitesArray;
};

// Write a function that returns a function
// The outer function is the High-Order function.
export const selectCampsiteById = (id) => (state) => { 
    // Now we can use the application state from Redux inside the function to access the campistes array.
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
};

/*export const selectFeaturedCampsite = () => {
    // whenever this function returns a true value means our test has passed.
    Which means that whatever item from the array it was iterating over at that time,
    is what will be returned by the find method 
    return CAMPSITES.find((campsite) => campsite.featured); 
};*/
export const selectFeaturedCampsite = (state) => { // we are changing how we access the campsites array.
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};