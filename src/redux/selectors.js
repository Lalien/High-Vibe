import API from '../API';

export const getSearchText = state => {
    return state.search_text || "";
}

export const getSelectedStrain = state => {
    return state.selected_strain || null;
}

let timer;

export const getSearchResults = async search_text => {
    return new Promise((resolve, reject) => {
        clearTimeout(timer);
        timer = setTimeout(async () => {
            if (search_text.length) {
                let response =  await API.get('strains/search/name/' + search_text);
                resolve(response.data);
            } else {
                resolve([]);
            }
        }, 500);
    });
}