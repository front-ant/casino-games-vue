<template>
  <div>
    <h1>Let's Get You Logged In!</h1>
    <form>
      <label for="user">Username</label>
      <input v-model="user" name="user" />

      <label for="password">Password</label>
      <input type="password" v-model="password" name="password" />
      <input type="submit" @click.prevent="handleLogin" />
      <input type="checkbox" v-model="check1" name="check1" />
      <label for="check1">Ich akzeptiere diesen Text</label>
      <input type="checkbox" v-model="check2" name="check1" />
      <label for="check2">Ich akzeptiere auch diesen Text</label>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: "",
      password: "",
      check1: false,
      check2: false
    };
  },

  methods: {
    handleLogin: function() {
      this.$emit("submitted");
    }
  }
};
</script>
