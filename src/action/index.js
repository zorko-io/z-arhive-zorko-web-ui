export const SPEC_LOOKUPS_REQUEST = 'SPEC_LOOKUPS_REQUEST';
export const SPEC_LOOKUPS_SET = 'SPEC_LOOKUPS_SET';

export const specLookupsRequest = () => ({
    type: SPEC_LOOKUPS_REQUEST
});

export const specLookupsSet = (lookups) => ({
    type: SPEC_LOOKUPS_SET,
    payload: lookups
});
