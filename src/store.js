import Vue from "vue";
import axios from "axios";

export const state = Vue.observable({
    moviesList: [],
    seriesList: []
});

export function searchItems(searchedTitle, itemType) {
    axios.get("https://api.themoviedb.org/3/search/" + itemType, {
        params: {
            api_key: "e9b9c7ff3c169153b56680161c88f555",
            query: searchedTitle,
            language: "it"
        }
    }).then((response) => {
        if(itemType === "movie") {
            state.moviesList = response.data.results;
        } else if (itemType === "tv") {
            state.seriesList = response.data.results;
        }
    });
}