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
            <b>Voto: </b>
            <i v-for="i in voteStars.full" :key="i" class="fa-solid fa-star"></i>
            <i v-if="voteStars.half" class="fa-solid fa-star-half-stroke"></i>
            <i v-for="i in voteStars.empty" :key="i + 5" class="fa-regular fa-star"></i>
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
                    return require("../assets/img/placeholder-w342.png");
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
            voteStars() {
                const stars = {
                    full : Math.floor(this.searchItem.vote_average / 2),
                    empty : 5 - Math.floor(this.searchItem.vote_average / 2)
                }
                if((this.searchItem.vote_average / 2) % 1 >= 0.5) {
                    stars.half = 1;
                    stars.empty--;
                } else {
                    stars.half = 0;
                }
                return stars;
            }
        }
    }
</script>

<style lang="scss">
    .fa-star, .fa-star-half, .fa-star-half-stroke {
        color: #FEBC00;
    }
</style>