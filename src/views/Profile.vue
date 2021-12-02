<template>
  <div class='profile'>
    <div class='post' v-for='post in posts' :key='post._id'>
      <h3>{{post.name}}</h3>
      <p>{{post.content}}</p>
      <p><em>{{post.time}}</em></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Profile',
  data() {
    return {
      posts: [],
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      try {
        let response = await axios.get('/api/posts/' + this.$route.params.id);
        this.posts = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
}

</script>
