<template>
<div>
    <p class="homeText">
        Syötä tapahtuma
    </p>
    <br/>
    <input type="text" v-model="postEvent" @change="postPost()" v-on:keyup.enter="onEnter">
    <ul v-if="errors && errors.length">
        <li v-for="error of errors" :key="error.message">
            {{ error.message }}
        </li>
    </ul>
    <ul v-if="success">
        <li>
            {{ success }}
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
            errors: [],
            success: ''
            }
        },

    methods: {
        onEnter: function() {
            if (this.postEvent.length < 1) {
                this.success = "",
                this.errors.push({ message: "Tyhjä sisältökenttä" })
            } else {
                this.errors = [],
                this.success = "Tiedot lähetetty",
                this.postEvent = ""
            }
        },
        postPost() {
            if (this.postEvent.length > 0) {
                axios.post(`http://localhost:3001/notes`, {
                    content: this.postEvent,
                    important: false
                })
                .catch(e => {
                    this.errors.push(e)
                })
            }
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