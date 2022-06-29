<template>
    <div>
        <ul>
            <li v-for="(movie, i) in moviesList" :key="i">
                <ItemCard :search-item="movie"/>
            </li>
        </ul>
        <div>------------------------------------------------</div>
        <ul>
            <li v-for="(serie, i) in seriesList" :key="i">
                <ItemCard :search-item="serie"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import { state } from '../store'
    import ItemCard from './ItemCard';

    export default{
        components: {
            ItemCard
        },

        computed: {
            moviesList() {
                return state.moviesList;
            },
            seriesList() {
                return state.seriesList;
            }
        }
    }
</script>