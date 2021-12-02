<template>
  <div v-if='createActive' class='create'>
    <input v-model='username' placeholder='Username'/>
    <input v-model='name' placeholder='Name'/>
    <input v-model='password' placeholder='Password'/>
    <p></p>
    <button @click='createAccount'>Create Account</button>
    <button @click='toggleCreate'>Go Back to Login</button>  
  </div>
  <div v-else class='login'>
    <div class="form">
      <input v-model='username' placeholder='Username'/>
      <input v-model='password' placeholder='Password'/>
      <p></p>
      <button @click='login'>Login</button>
      <button @click='toggleCreate'>Create New Account</button>
    </div>
  </div>
</template>

<style>
.create {
  
}

.login {
  
}
</style>

<script>
  import axios from 'axios';

  export default {
    name: 'LoginScreen',
    data() {
      return {
        createActive: false,
        username: null,
        password: null,
        name: null,
      };
    },
    methods: {
      async login () {
        if (this.username == '' || this.password == '') {
          alert('Invalid username or password');
          return;
        }
        else {
          try {
            let response = await axios.post('/api/user/login', {
              username: this.username,
              password: this.password
            });
            if (response.data == '') {
              alert('Invalid username or password');
              return;
            }
            else {
              this.$root.$data.name = response.data.name;
              this.$root.$data.username = response.data.username;
              this.$root.$data.userId = response.data._id;
              this.$root.$data.loggedIn = true;
            }
          } catch (error) {
            console.log(error);
          }
        }
      },
      toggleCreate () {
        this.createActive = !this.createActive;
      },
      async createAccount () {
        try {
          if (this.username == '' || this.password == '' || this.name == '') {
            alert('Invalid username or password');
            return;
          }
          else {
            let response = await axios.post('/api/user', {
              username: this.username,
              name: this.name,
              password: this.password
            });
            this.$root.$data.name = response.data.name;
            this.$root.$data.username = response.data.username;
            this.$root.$data.userId = response.data._id;
            this.$root.$data.loggedIn = true;
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
</script>
