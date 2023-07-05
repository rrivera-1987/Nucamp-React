import { CAMPSITES } from '../../app/shared/CAMPSITES';

/* Selects and return the entire array of campsites.
You can export the array by adding export at the beginning of the function. */
export const selectAllCampsites = () => { 
    return CAMPSITES;
};

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
};