<template>
    <div>
        <ul>
            <li v-for="(movie, i) in moviesList" :key="i">
                <MovieCard :movie="movie"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import { state } from '../store'
    import MovieCard from './MovieCard';

    export default{
        components: {
            MovieCard
        },

        computed: {
            moviesList() {
                return state.moviesList;
            }
        }
    }
</script>