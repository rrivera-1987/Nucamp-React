//import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites',
    async () => {
        const response = await fetch(baseUrl + 'campsites');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    campsitesArray: [],
    isLoading: true,
    errMsg: '',
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCampsites.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCampsites.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.campsitesArray = mapImageURL(action.payload);
        },
        [fetchCampsites.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
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
    return {
        featuredItem: state.campsites.campsitesArray.find(
            (campsite) => campsite.featured
        ),
        isLoading: state.campsites.isLoading,
        errMsg: state.campsites.errMsg
    };
};