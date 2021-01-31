<template>
<div>
    <p class="homeText">
        Syötä tapahtuma
    </p>
    <br/>
    <input type="text" v-model="postEvent" @change="postPost()">
    <ul v-if="errors && errors.length">
        <li v-for="error of errors" :key="error.message">
            {{ error.message }}
        </li>
    </ul>
</div>
</template>
<script>
import axios from 'axios'

    export default {
    name: 'AddEvent',

    data() {
        return {
            postEvent: '',
            errors: []
            }
        },

    methods: {
        postPost() {
            axios.post(`http://localhost:3001/notes`, {
                content: this.postEvent,
                important: false
            })
            .catch(e => {
                this.errors.push(e)
            })
        }
    }
};
</script>
<style scoped>
    .homeText{
    font-size: 35px;
    color: red;
    text-align: center;
    position: relative;
    top:30px;
    text-shadow: 2px 2px 2px gray;
}
</style>