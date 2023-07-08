import { PARTNERS } from '../../app/shared/PARTNERS';

export const selectAllPartners = () => {
    return PARTNERS;
};

export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured);
};

// export const selectCommentsByCampsiteId = (campsiteId) => {
//     return COMMENTS.filter(
//         (comment) => comment.campsiteId === parseInt(campsiteId)
//     );
// };