export const updateText = (text) => {
    return {
        type: 'UPDATE_TEXT',
        text
    };
}

export const selectStrain = (id, name) => {
    return {
        type: 'SELECT_STRAIN',
        id,
        name
    }
}

export const resetSelectedStrain = () => {
    return {
        type: 'RESET_SELECTED_STRAIN'
    }
}