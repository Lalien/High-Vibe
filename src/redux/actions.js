export const updateText = (text) => {
    return {
        type: 'UPDATE_TEXT',
        text
    };
}

export const selectStrain = id => {
    return {
        type: 'SELECT_STRAIN',
        id
    }
}