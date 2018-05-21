<template>

  <div class="wrapper">
    <div class="test">
      <h1>title: {{title}}</h1>
      <input type="text" v-model="title">
      <p>message: {{msg}}</p>
      <ul>
        <li v-for="item in items">{{item.title}}</li>
      </ul>
      <label>first name: </label><input type="text" v-model="user.firstName"><br>
      <label>last name: </label><input type="text" v-model="user.lastName">
      <p v-if="showName">name: {{user.firstName}}</p>
      <p v-else>nope</p>
      <p>full name: {{fullName}}</p>
      <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
      <button v-on:click="greet('This is your first greeeting.')">Print Greeting</button>
      <div id="output-container"></div>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'test',
    props: {
      msg: {
        type: String,
        default: 'This is your message.'
      }
    },
    data() { 
      return {
        title: 'Hellooo World',
        user: {
          firstName: 'Jessup',
          lastName: 'Doent'
        },
        showName: true,
        items: [
          {title: 'item one'},
          {title: 'item two'},
          {title: 'item three'}
        ]
      }
    },
    methods: {
      greet: function(greeting) {
        var output = document.getElementById('output-container');
        var textnode = document.createTextNode("This is your second greeeting.");
        output.appendChild(textnode);
        output.appendChild(document.createElement("br"));
      },
      pressKey: function(e) {
        var output = document.getElementById('output-container');
        var textnode = document.createTextNode("You wrote: " + e.target.value);
        output.appendChild(textnode);
        output.appendChild(document.createElement("br"));
      },
      enterHit: function() {
        var output = document.getElementById('output-container');
        var textnode = document.createTextNode("You hit enter.");
        output.appendChild(textnode);
        output.appendChild(document.createElement("br"));
      }
    },
    computed: {
      fullName: function() {
        return this.user.firstName + ' ' + this.user.lastName;
      }
    }
  }

</script>
