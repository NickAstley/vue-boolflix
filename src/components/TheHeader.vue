<template>
    <div>
        <form v-on:submit.prevent="">
            <label for="moviedb-search">Cerca un film o una serie tv:</label>
            <input type="search" name="moviedb-search" id="moviedb-search" v-model="searchedTitle" @keyup.enter="onSearch()">
            <button type="submit" @click="onSearch()">Cerca</button>
        </form>
    </div>
</template>

<script>
    import { searchItems } from '../store'

    export default {
        data() {
            return {
                searchedTitle: ""
            }
        },

        methods: {
            onSearch() {
                if(this.searchedTitle) {
                    searchItems(this.searchedTitle, "movie");
                    searchItems(this.searchedTitle, "tv");
                }
            }
        }
    }
</script>

<style>
    label[for="moviedb-search"] {
        display: none;
    }
</style>