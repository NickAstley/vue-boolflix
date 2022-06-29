<template>
    <ul>
        <li>
            <img :src="itemPoster" :alt="`Poster di ${itemTitle}`">
        </li>
        <li>
            <b>Titolo: </b> {{ itemTitle }}
        </li>
        <li>
            <b>Titolo originale: </b> {{ itemOriginalTitle }}
        </li>
        <li>
            <b>Lingua: </b> <span class="fi" :class="`fi-` + itemCountryFlag"></span>
        </li>
        <li>
            <b>Voto: </b> <i v-for="i in itemAverageVote[0]" :key="i" class="fa-solid fa-star"></i><i v-if="itemAverageVote[1]" class="fa-solid fa-star-half"></i>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            searchItem: Object
        },

        computed: {
            itemPoster() {
                if (this.searchItem.poster_path === null) {
                    return require("../assets/placeholder-w342.png");
                }
                return `https://image.tmdb.org/t/p/w342${this.searchItem.poster_path}`;
            },
            itemTitle() {
                if(this.searchItem.title) {
                    return this.searchItem.title;
                }
                return this.searchItem.name;
            },
            itemOriginalTitle() {
                if(this.searchItem.original_title) {
                    return this.searchItem.original_title;
                }
                return this.searchItem.original_name;
            },
            itemCountryFlag() {
                const languageMap = {
                    "da" : "dk",
                    "en" : "us",
                    "fa" : "ir",
                    "hi" : "in",
                    "ja" : "jp",
                    "ko" : "kr",
                    "zh" : "cn"
                }
                if (languageMap[this.searchItem.original_language]) {
                    return languageMap[this.searchItem.original_language];
                }
                return this.searchItem.original_language;
            },
            itemAverageVote() {
                const halfVote = this.searchItem.vote_average / 2;
                if(halfVote % 1 >= 0.5) {
                    return [Math.floor(halfVote), 1]
                }
                return [Math.floor(halfVote)];
            }
        }
    }
</script>

<style lang="scss">
    @import "~flag-icons/css/flag-icons.css";
    @import "~@fortawesome/fontawesome-free/css/all.min.css";

    .fa-star, .fa-star-half {
        color: #FEBC00;
    }
</style>