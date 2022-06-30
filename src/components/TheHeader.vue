<template>
    <header class="py-2">
        <div class="container">
            <nav class="row justify-content-between align-items-center">
                <a class="col-auto" href="#">
                    <img class="logo" src="../assets/img/logo.png" alt="Logo Boolflix">
                </a>
                <div class="col-auto">
                    <div class="input-group">
                        <label class="d-none" for="moviedb-search">Cerca un film o una serie tv:</label>
                        <input type="search" name="moviedb-search" class="form-control rounded-start" id="moviedb-search" v-model="searchedTitle" @keyup.enter="onSearch()" placeholder="Cerca un film o una serie tv:">
                        <button class="btn btn-outline-secondary" type="button" @click="onSearch()">Cerca</button>
                    </div>
                </div>
            </nav>
        </div>
    </header>
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

<style lang="scss">
    header {
        background: black;

        .logo {
            width: 200px;
        }

        input {
            border-radius: 50px;
        }

        input::placeholder {
            font-size: 0.8rem;
        }
    }
</style>