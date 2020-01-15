<template>
  <section class="welcome container ">
    <div class="card grey lighten-4">
      <div class="card-content center-align">
        <h2 class="green-text">Welcome</h2>
        <h4 class="green-text text-darken-3">Star Wars Chat</h4>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your Star Wars Name</label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button class="btn green">Enter Chat</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat() {
      if(this.name) {
        this.$router.push({name: 'Chat', params: {name: this.name}})
      }else {
        this.feedback = 'You must enter a name to join'
      }
    }
  }
}
</script>

<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 3em;
}
.welcome h4 {
  font-size: 2em;
}
.welcome button {
  margin: 30px auto;
}

</style>
