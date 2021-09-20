export const combinedAction = (emailName, nameName) => {
    return {
        type: 'COMBINEDACTION',
        payload: [emailName, nameName]
    };
};