import API from '../API';

export const getSearchText = state => {
    return state.search_text || "";
}

let timer;

export const getSearchResults = async state => {
    let search_text = state.search_text || "";
    clearTimeout(timer);
    timer = setTimeout(async () => {
        if (search_text.length) {
            let response =  await API.get('strains/search/name/' + search_text);
            return response.data;
        } else {
            return [];
        }
    }, 500);
}