<template>

  <div class="wrapper">
    <div class="users">
      <h1>New Users</h1>
      <form v-on:submit="addUser">
        <input type="text" v-model="newUser.name" placeholder="enter name">
        <br>
        <input type="text" v-model="newUser.email" placeholder="enter email">
        <br>
        <input type="submit" value="Submit">
      </form>
      <h1>Users</h1>
      <ul>
        <li v-for="user in users">
          <input type="checkbox" class="toggle" v-model="user.contacted">
          <span :class="{contacted: user.contacted}">
            {{user.name}}: {{user.email}}
          </span>
          <button v-on:click="deleteUser(user)">X</button>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'users',
    data() { 
      return {
        newUser: {},
        users: [
          {
            name: 'Gus Chiggins',
            email: 'gchigs@gmail.com',
            contacted: false
          },
          {
            name: 'Sharon Sharroon',
            email: 'sharshar@gmail.com',
            contacted: false
          },
          {
            name: 'Bap Dornk',
            email: 'thebapster@gmail.com',
            contacted: false
          }
        ]
      }
    },
    methods: {
      addUser: function(e) {
        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false
        });
        e.preventDefault();
      },
      deleteUser: function(user) {
        this.users.splice(this.users.indexOf(user), 1);
      }
    },
    created: function(){
      this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(function(response){
          this.users = response.data;
        });
    }
  }

</script>
