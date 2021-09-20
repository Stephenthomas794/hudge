export const emailAction = (emailName) => {
    return {
        type: 'EMAILACTION',
        payload: emailName
    };
};