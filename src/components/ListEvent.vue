<template>
<div>
  <p class="homeText">
    Listaa tapahtumia
  </p>
  <br/>
  <ul id="notes">
    <li v-for="note in notes" :key="note.id">
      {{ note.content }}
    </li>
  </ul>
</div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'ListEvent',

  data() {
    return {
      notes: [],
      errors: []
    }
  },

  created() {
    axios.get(`http://localhost:3001/notes`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.notes = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
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