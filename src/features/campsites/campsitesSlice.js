import { CAMPSITES } from '../../app/shared/CAMPSITES';

/* Selects and return the entire array of campsites.
You can export the array by adding export at the beginning of the function. */
export const selectAllCampsites = () => { 
    return CAMPSITES;
};

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
    /* whenever this function returns a true value means our test has passed.
    Which means that whatever item from the array it was iterating over at that time,
    is what will be returned by the find method */
    return CAMPSITES.find((campsite) => campsite.featured); 
};