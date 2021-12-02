<template>
  <div class="home">
    <div v-if='isLoggedIn'>
      <div id='profilePage'>
        <router-link :to="'/profile/' + this.$root.$data.userId">Your Profile</router-link>
      </div>
      <div class="form">
        <input v-model="content" placeholder="Add your thoughts here"/>
        <p></p>
        <button @click="upload">Upload</button>
      </div>
      <div class='post' v-for='post in posts' :key='post._id'>
        <router-link :to="'/profile/' + post.userId">
          <h3>{{post.name}}</h3>
          <p>{{post.content}}</p>
          <p><em>{{post.time}}</em></p>
        </router-link>
      </div>
    </div>
    <LoginScreen v-else/>
  </div>
</template>

<style>
.post {
  margin: 20px 0px;
  border: double;
}
.post a {
  text-decoration: none;
  color: black;
}
#profilePage {
  margin: 30px 0px;
}
</style>

<script>
import axios from 'axios';
import LoginScreen from '../components/LoginScreen.vue';

export default {
  name: "Home",
  components: {
    LoginScreen
  },
  data() {
    return {
      posts: [],
      content: null,
      userId: null,
    }
  },
  created() {
    this.getPosts();
    this.userId = this.$root.$data.userId;
  },
  methods: {
    async getPosts() {
      try {
        let response = await axios.get('/api/posts');
        this.posts = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async upload() {
      let date_ob = new Date();
      let current = date_ob.getFullYear() + '-' + ('0' + (date_ob.getMonth() + 1)).slice(-2) + '-' + ('0' + date_ob.getDate()).slice(-2) + ' ' + date_ob.getHours() + ':' + date_ob.getMinutes() + ':' + date_ob.getSeconds();
      try {
        await axios.post('/api/post', {
          userId: this.$root.$data.userId,
          name: this.$root.$data.name,
          content: this.content,
          time: current
        });
        this.getPosts();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    isLoggedIn() {
      return this.$root.$data.loggedIn;
    },
  },
};
</script>
