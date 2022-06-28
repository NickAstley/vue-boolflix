<template>
    <ul>
        <li>
            <b>Titolo: </b> {{ movie.title }}
        </li>
        <li>
            <b>Titolo originale: </b> {{ movie.original_title }}
        </li>
        <li>
            <b>Lingua: </b> {{ movie.original_language }}
        </li>
        <li>
            <b>Voto: </b> {{ movie.vote_average }}
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            movie: Object
        }
    }
</script>