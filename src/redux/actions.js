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

export const resetSelectedStrain = () => {
    return {
        type: 'RESET_SELECTED_STRAIN'
    }
}