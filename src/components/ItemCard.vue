<template>
    <ul>
        <li>
            <b>Titolo: </b> {{ searchItemTitle }}
        </li>
        <li>
            <b>Titolo originale: </b> {{ searchItemOriginalTitle }}
        </li>
        <li>
            <b>Lingua: </b> <span class="fi" :class="`fi-` + countryFlag"></span>
        </li>
        <li>
            <b>Voto: </b> {{ searchItem.vote_average }}
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            searchItem: Object
        },

        computed: {
            searchItemTitle() {
                if(this.searchItem.title) {
                    return this.searchItem.title;
                }
                return this.searchItem.name;
            },
            searchItemOriginalTitle() {
                if(this.searchItem.original_title) {
                    return this.searchItem.original_title;
                }
                return this.searchItem.original_name;
            },
            countryFlag() {
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
            }
        }
    }
</script>

<style>
    @import "~flag-icons/css/flag-icons.css";
</style>